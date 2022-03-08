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
exports.book_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: book delete GET');
};
exports.book_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: book delete POST');
};
exports.book_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: book update GET');
};
exports.book_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: book update POST');
};
