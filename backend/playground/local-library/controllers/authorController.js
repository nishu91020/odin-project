const Author = require('../models/author');
const Book = require('../models/book');
const async = require('async');
const { body, validationResult } = require('express-validator');

exports.author_list = function (req, res) {
    Author.find().sort([ [ 'family_name', 'ascending' ] ]).exec(function (err, list_author) {
        res.render('author_list', { title: 'Author List', author_list: list_author });
    });
};
exports.author_detail = function (req, res, next) {
    async.parallel(
        {
            author: function (callback) {
                Author.findById(req.params.id).exec(callback);
            },
            author_books: function (callback) {
                Book.find({ author: req.params.id }, 'title summary').exec(callback);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.author_books == null) {
                let err = new Error('Author not found');
                err.status = 404;
                return next(err);
            }
            return res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books });
        }
    );
};
exports.author_create_get = function (req, res) {
    res.render('author_form', { title: 'Create Author' });
};

exports.author_create_post = [
    body('first_name')
        .trim()
        .isLength({ min: 3 })
        .withMessage('minimum 3 length first name required')
        .isAlphanumeric()
        .withMessage('first name should not contain alphanumeric values!')
        .escape(),
    body('family_name').trim().isLength({ min: 1 }).withMessage('last name cannot be empty').isAlphanumeric().withMessage('last name cannot contain alphanumeric!').escape(),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('author_form', { title: 'Create Author', errors: errors.array() });
        }
        else {
            const author = new Author({
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death
            });
            author.save(err => {
                if (err) {
                    return next(err);
                }
                res.redirect(author.url);
            });
        }
    }
];
exports.author_delete_get = function (req, res) {
    async.parallel(
        {
            author: function (cb) {
                Author.findById(req.params.id).exec(cb);
            },
            authors_books: function (cb) {
                Book.find({ author: req.params.id }).exec(cb);
            }
        },
        function (err, results) {
            if (err) next(err);
            if (results.author == null) {
                res.redirect('/catalog/authors');
            }
            res.render('author_delete', { title: 'Delete Author', author: results.author, author_books: results.authors_books });
        }
    );
};
exports.author_delete_post = function (req, res, next) {
    async.parallel(
        {
            author: function (cb) {
                Author.findById(req.body.authorid).exec(cb);
            },
            authors_books: function (cb) {
                Book.find({ author: req.body.authorid }).exec(cb);
            }
        },
        function (err, results) {
            if (err) return next(err);
            if (results.authors_books.length > 0) {
                res.render('author_delete', { title: 'Delete Author', author: results.author, author_books: results.authors_books });
                return;
            }
            else {
                Author.findByIdAndRemove(req.body.authorid, function deleteAuthor (err) {
                    if (err) return next(err);
                    res.redirect('/catalog/authors');
                });
            }
        }
    );
};
exports.author_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

exports.author_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
