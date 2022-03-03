const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookInstanceSchema = Schema({
    book: { type: Schema.Types.ObjectId, Ref: 'Book' },
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: [ 'Available', 'Maintenance', 'Loaned', 'Reserved' ], default: 'Maintenance' },
    due_back: { type: Date }
});

bookInstanceSchema.virtual('url').get(function () {
    return 'catalog/bookinstance/' + this._id;
});
module.exports = mongoose.model('BookInstance', bookInstanceSchema);