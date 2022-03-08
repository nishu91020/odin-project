var mongoose = require('mongoose');
var { DateTime } = require('luxon');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    family_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    date_of_birth: { type: Date },
    date_of_death: { type: Date }
});

//Virtual for name

AuthorSchema.virtual('name').get(function () {
    let fullName = '';
    fullName += this.first_name + ' ' + this.family_name;
    return fullName;
});

//virtual for lifespan

AuthorSchema.virtual('lifespan').get(function () {
    let span = '';
    if (this.date_of_birth) {
        span = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
    }
    span += ' - ';
    if (this.date_of_death) {
        span += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
    }
    return span;
});

//virtual for url

AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);
