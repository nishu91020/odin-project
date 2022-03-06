const genre = require('../models/genre');
const Genre = require('../models/genre');

exports.genre_list = function (req, res) {
    genre.find().sort([ [ 'name', 'ascending' ] ]).exec(function (err, list_genre) {
        res.render('genre_list', { title: 'Genre List', genre_list: list_genre });
    });
};

exports.genre_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: genre detail:' + req.params.id);
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
