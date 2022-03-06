const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, { newUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('err', console.error.bind(console, 'mongodb connection error'));
