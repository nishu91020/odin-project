// title author(ref) sumarry, isbn, genre url->catalog/book/this._id
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [ { type: Schema.Types.ObjectId, ref: 'Genre' } ]
});

bookSchema.virtual('url').get(function () {
    return '/catalog/book/' + this._id;
});

module.exports = mongoose.model('Book', bookSchema);
