const author = require('../models/author');
const Author = require('../models/author');

exports.author_list = function (req, res) {
    author.find().sort([ [ 'family_name', 'ascending' ] ]).exec(function (err, list_author) {
        res.render('author_list', { title: 'Author List', author_list: list_author });
    });
};
exports.author_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
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
