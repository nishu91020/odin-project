const BookInstance = require('../models/bookinstance');

exports.bookinstance_list = function (req, res, next) {
    BookInstance.find().populate('book').exec(function (err, list_bookinstances) {
        if (err) {
            return next(err);
        }
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
        return res.render('bookinstance_detail', { title: 'Book Copy:' + result.book.title, bookinstance: result });
    });
};

exports.bookinstance_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};
exports.bookinstance_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};
exports.bookinstance_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};
exports.bookinstance_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};
exports.bookinstance_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};
exports.bookinstance_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};
