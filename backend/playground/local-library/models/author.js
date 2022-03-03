var mongoose = require('mongoose');

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

AuthorSchema.virtual('lifeSpan').get(function () {
    let span = '';
    if (this.date_of_birth) {
        span = date_of_birth.getYear().toString();
    }
    span += '-';
    if (this.date_of_death) {
        span += date_of_death.getYear().toString();
    }
    return span;
});

//virtual for url

AuthorSchema.virtual('url').get(function () {
    return 'catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);
