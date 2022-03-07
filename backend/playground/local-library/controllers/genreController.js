const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async');

exports.genre_list = function (req, res) {
    Genre.find().sort([ [ 'name', 'ascending' ] ]).exec(function (err, list_genre) {
        res.render('genre_list', { title: 'Genre List', genre_list: list_genre });
    });
};

exports.genre_detail = function (req, res, next) {
    async.parallel(
        {
            genre: function (callback) {
                Genre.findById(req.params.id).exec(callback);
            },
            genre_books: function (callback) {
                Book.find({ genre: req.params.id }).exec(callback);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.genre == null) {
                let err = new Error('Genre not found');
                err.status = 404;
                return next(err);
            }
            res.render('genre_detail', {
                title: 'Genre_Detail',
                genre: results.genre,
                genre_books: results.genre_books
            });
        }
    );
};

exports.genre_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genre create GET');
};
exports.genre_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genre create POST');
};
exports.genre_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genre delete GET');
};
exports.genre_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genre delete POST');
};
exports.genre_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: genre update GET');
};
exports.genre_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: genre update POST');
};
