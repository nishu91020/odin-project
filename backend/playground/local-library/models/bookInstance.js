const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const bookinstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, Ref: 'Book' },
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: [ 'Available', 'Maintenance', 'Loaned', 'Reserved' ], default: 'Maintenance' },
    due_back: { type: Date }
});

bookinstanceSchema.virtual('url').get(function () {
    return 'catalog/bookinstance/' + this._id;
});
bookinstanceSchema.virtual('due_back_formatted').get(function () {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('BookInstance', bookinstanceSchema);
