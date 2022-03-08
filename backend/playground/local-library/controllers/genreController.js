const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

exports.genre_list = function (req, res) {
    Genre.find().sort([ [ 'name', 'ascending' ] ]).exec(function (err, list_genre) {
        res.render('genre_list', { title: 'Genre List', genre_list: list_genre });
    });
};

exports.genre_detail = function (req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.id);
    async.parallel(
        {
            genre: function (callback) {
                Genre.findById(id).exec(callback);
            },

            genre_books: function (callback) {
                Book.find({ genre: id }).exec(callback);
            }
        },
        function (err, results) {
            console.log(results);
            if (err) {
                return next(err);
            }
            if (results.genre === null) {
                var err = new Error('Genre not found');
                err.status = 404;
                return next(err);
            }
            res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books });
        }
    );
};

exports.genre_create_get = function (req, res) {
    res.render('genre_form', { title: 'Create Genre' });
};
exports.genre_create_post = [
    body('name', 'Genre name required').trim().isLength({ min: 1 }).escape(), // add a middleware that validates name
    function (req, res, next) {
        // add a middleware that gets the req if it is validated
        const errors = validationResult(req); // add validation on request
        var genre = new Genre({ name: req.body.name });
        if (!errors.isEmpty()) {
            //if there are errors render the form with errors
            res.render('genre_form', { title: 'Create Genre', errors: errors.array() });
            return;
        }
        else {
            //otherwise find the genre if it already exist redirect to its detail page else save the created genre to DB
            Genre.findOne({ name: req.body.name }).exec(function (err, found_genre) {
                if (err) {
                    return next(err);
                }
                if (found_genre) {
                    res.redirect(found_genre.url);
                }
                else {
                    genre.save(function (err) {
                        if (err) return next(err);
                        res.redirect(genre.url);
                    });
                }
            });
        }
    }
];
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
