var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
const { body, validationResult } = require('express-validator');
var async = require('async');

exports.index = function (req, res) {
    async.parallel(
        {
            book_count: function (callback) {
                Book.countDocuments({}, callback);
            },
            book_instance_count: function (callback) {
                BookInstance.countDocuments({}, callback);
            },
            book_instance_available_count: function (callback) {
                BookInstance.countDocuments({ status: 'Available' }, callback);
            },
            author_count: function (callback) {
                Author.countDocuments({}, callback);
            },
            genre_count: function (callback) {
                Genre.countDocuments({}, callback);
            }
        },
        function (err, results) {
            console.log(results);
            res.render('index', { title: 'Local Library Home', error: err, data: results });
        }
    );
};

exports.book_list = function (req, res, next) {
    Book.find({}, 'title author').sort({ title: 1 }).populate('author').exec(function (err, list_books) {
        if (err) {
            return next(err);
        }
        res.render('book_list', { title: 'Book List', book_list: list_books });
    });
};

exports.book_detail = function (req, res, next) {
    async.parallel(
        {
            book: function (callback) {
                Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
            },
            book_instances: function (callback) {
                BookInstance.find({ book: req.params.id }).exec(callback);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.book === null) {
                let err = new Error('Book Not Found');
                err.status = 404;
                return next(err);
            }
            return res.render('book_detail', { title: 'Book Details', book: results.book, book_instances: results.book_instances });
        }
    );
};

exports.book_create_get = function (req, res) {
    async.parallel(
        {
            authors: function (cb) {
                Author.find(cb);
            },
            genres: function (cb) {
                Genre.find(cb);
            }
        },
        function (err, results) {
            if (err) return next(err);
            res.render('book_form', { title: 'Create Book', genres: results.genres, authors: results.authors });
        }
    );
};
exports.book_create_post = [
    (req, res, next) => {
        if (!req.body.genre instanceof Array) {
            if (typeof req.body.genre === 'undefined') req.body.genre = [];
            else req.body.genre = new Array(req.body.genre);
        }
        next();
    },
    body('title', 'title must not be empty').trim().isLength({ min: 1 }).escape(),
    body('author', 'author must not be empty').trim().isLength({ min: 1 }).escape(),
    body('summary', 'summary must not be empty').trim().isLength({ min: 1 }).escape(),
    body('isbn', 'isbn must not be empty').trim().isLength({ min: 1 }).escape(),
    body('genre.*').escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            isbn: req.body.isbn,
            genre: req.body.genre
        });
        if (!errors.isEmpty()) {
            async.parallel(
                {
                    authors: function (cb) {
                        return Author.find(cb);
                    },
                    genres: function (cb) {
                        return Genre.find(cb);
                    }
                },
                function (err, results) {
                    if (err) {
                        return next(err);
                    }
                    for (let i = 0; i < results.genres.length; i++) {
                        if (book.genre.indexOf(results.genres[i]._id) > -1) {
                            results.genres[i].checked = 'true';
                        }
                    }
                    // console.log(results.authors);
                    // console.log(results.genres);
                    res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres, book: book, errors: errors.array() });
                }
            );
            return;
        }
        else {
            book.save(function (err) {
                if (err) return next(err);
                res.redirect(book.url);
            });
        }
    }
];
exports.book_delete_get = function (req, res, next) {
    async.parallel(
        {
            book_instances: function (cb) {
                BookInstance.find({ book: req.params.id }).exec(cb);
            },
            book: function (cb) {
                Book.findById(req.params.id).exec(cb);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.book == null) {
                res.redirect('/catalog/books');
            }
            res.render('book_delete', { book: results.book, book_instances: results.book_instances });
        }
    );
};
exports.book_delete_post = function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, err => {
        if (err) return next(err);
        res.redirect('/catalog/books');
    });
};
exports.book_update_get = function (req, res) {
    async.parallel(
        {
            book: function (cb) {
                Book.findById(req.params.id).populate('author').populate('genre').exec(cb);
            },
            authors: function (cb) {
                Author.find(cb);
            },
            genres: function (cb) {
                Genre.find(cb);
            }
        },
        function (err, results) {
            if (err) return next(err);
            if (results.book == null) {
                let err = new Error('Book not found');
                err.status = 404;
                return next(err);
            }
            for (let gen = 0; gen < results.genres.length; gen++) {
                for (let b = 0; b < results.book.length; b++) {
                    if (results.genres[gen]._id.toString() === results.book.genres[gen]._id.toString()) {
                        results.genres[gen].checked = 'false';
                    }
                }
            }
            res.render('book_form', { title: 'Update Book', authors: results.authors, genres: results.genres, book: results.book });
        }
    );
};
exports.book_update_post = [
    (req, res, next) => {
        if (!(req.body.genre instanceof Array)) {
            if (typeof req.body.genre === 'undefined') req.body.genre = [];
            else req.body.genre = new Array(req.body.genre);
        }
        next();
    },
    body('title', 'title required').trim().isLength({ min: 1 }).escape(),
    body('author', 'author required').trim().isLength({ min: 1 }).escape(),
    body('summary', 'summary required').trim().isLength({ min: 1 }).escape(),
    body('isbn', 'isbn required').trim().isLength({ min: 1 }).escape(),
    body('genre.*').escape(),
    function (req, res, next) {
        const errors = validationResult(req);
        var book = new Book({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            isbn: req.body.isbn,
            genre: typeof req.body.genre === 'undefined' ? [] : req.body.genre,
            _id: req.params.id
        });
        if (!errors.isEmpty()) {
            async.parallel(
                {
                    authors: function (cb) {
                        Author.find(cb);
                    },
                    genres: function (cb) {
                        Genre.find(cb);
                    }
                },
                function (err, results) {
                    if (err) return next(err);
                    for (let i = 0; i < results.genres.length; i++) {
                        if (book.genre.indexOf(results.genres[i]._id) > -1) {
                            results.genres[i].checked = 'true';
                        }
                    }
                    res.render('book_form', { title: 'Update Book', authors: results.authors, genres: results.genres, book: results.book, errors: errors.array() });
                }
            );
            return;
        }
        else {
            Book.findByIdAndUpdate(req.params.id, book, {}, function (err, thebook) {
                if (err) return next(err);
                res.redirect(thebook.url);
            });
        }
    }
];
