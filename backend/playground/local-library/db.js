const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb+srv://Nishu:Nishu123@cluster0.v8dxm.mongodb.net/local_library?retryWrites=true&w=majority';

mongoose.connect(DATABASE_URL, { newUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('err', console.error.bind(console, 'mongodb connection error'));
