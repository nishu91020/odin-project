const Author = require('../models/author');
const Book = require('../models/book');
const async = require('async');

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
    res.send('NOT IMPLEMENTED: Author create GET');
};

exports.author_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};
exports.author_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author get GET');
};
exports.author_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};
exports.author_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

exports.author_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
