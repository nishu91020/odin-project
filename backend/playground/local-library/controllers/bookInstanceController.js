const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');
const { body, validationResult } = require('express-validator');
const async = require('async');

exports.bookinstance_list = function (req, res, next) {
    BookInstance.find().populate('book').exec(function (err, list_bookinstances) {
        if (err) {
            return next(err);
        }
        console.log(list_bookinstances);
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
};

exports.bookinstance_detail = function (req, res, next) {
    BookInstance.findById(req.params.id).populate('book').exec(function (err, result) {
        if (err) {
            next(err);
        }
        if (result == null) {
            var err = new Error('Book copy not found!');
            err.status = 404;
            return next(err);
        }
        console.log(result);
        return res.render('bookinstance_detail', { title: 'Book Copy:' + result.book.title, bookinstance: result });
    });
};

exports.bookinstance_create_get = function (req, res) {
    Book.find({}, 'title').exec(function (err, books) {
        if (err) return next(err);
        res.render('bookinstance_form', { title: 'Create Book Instance', book_list: books });
    });
};

exports.bookinstance_create_post = [
    body('book').trim().isLength({ min: 1 }).withMessage('Book feild is required').escape(),
    body('imprint').trim().isLength({ min: 1 }).withMessage('Imprint is required').escape(),
    body('status').escape(),
    body('due_back', 'Invalid date').optional({ checkFalsy: true }).isISO8601().toDate(),
    function (req, res, next) {
        const errors = validationResult(req);
        const bookinstance = new BookInstance({
            book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back
        });
        if (!errors.isEmpty()) {
            Book.find({}, 'title').exec(function (err, books) {
                if (err) return next(err);
                res.render('bookinstance_form', { title: 'Create Book Instance', book_list: books, errors: errors.array() });
            });
        }
        else {
            bookinstance.save(function (err) {
                if (err) return next(err);
                res.redirect(bookinstance.url);
            });
        }
    }
];
exports.bookinstance_delete_get = function (req, res) {
    BookInstance.findById(req.params.id).exec(function (err, instance) {
        if (err) {
            return err;
        }
        res.render('bookinstance_delete', { bookinstance: instance });
    });
};
exports.bookinstance_delete_post = function (req, res, next) {
    BookInstance.findByIdAndRemove(req.body.instanceid, err => {
        if (err) return next(err);
        res.redirect('/catalog/bookinstances');
    });
};
exports.bookinstance_update_get = function (req, res, next) {
    async.parallel(
        {
            bookinstance: function (cb) {
                BookInstance.findById(req.params.id).exec(cb);
            },
            books: function (cb) {
                Book.find({}, 'title').exec(cb);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.bookinstance == null) {
                const err = new Error('Bookinstance Not Found');
                err.status = 404;
                return next(err);
            }
            res.render('bookinstance_form', { title: 'Update Book Instance', book_list: results.books, bookinstance: results.bookinstance });
        }
    );
};
exports.bookinstance_update_post = [
    body('book').trim().isLength({ min: 1 }).withMessage("Book can't be empty").escape(),
    body('imprint').trim().isLength({ min: 1 }).withMessage("Imprint can't be empty").escape(),
    body('status').trim().isLength({ min: 1 }).withMessage('Book status required').escape(),
    body('due_back', 'required field').optional({ checkFalsy: true }).isISO8601().toDate(),
    function (req, res, next) {
        let errors = validationResult(req);
        const bookinstance = BookInstance({
            book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back,
            _id: req.params.id
        });
        if (!errors.isEmpty()) {
            Book.find({}, 'title').exec(function (err, books) {
                if (err) return next(err);
                res.render('bookinstance_form', { title: 'Create Book Instance', book_list: books, errors: errors.array() });
            });
        }
        else {
            Book.save(bookinstance, err => {
                if (err) {
                    return next(err);
                }
                res.redirect(bookinstance.url);
            });
        }
    }
];
