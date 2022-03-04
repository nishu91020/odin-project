const Book = require('../models/book');
const Author = require('../models/author');
const BookInstance = require('../models/bookInstance');
const Genre = require('../models/genre');

const async = require('async');

exports.index = function (req, res) {
    async.parallel(
        {
            book_count: function (callback) {
                Book.countDocuments({}, callback);
            },
            book_instance_count: function (callback) {
                BookInstance.countDocuments({}, callback);
            },
            book_instance_available: function (callback) {
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
exports.book_list = function (req, res) {
    res.send('NOT IMPLEMENTED: book list');
};

exports.book_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: book detail:' + req.params.id);
};

exports.book_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: book create GET');
};
exports.book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: book create POST');
};
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
