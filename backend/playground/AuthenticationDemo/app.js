const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const localStratergy = require('passport-local').Strategy;

const Schema = mongoose.Schema;
const uri = 'mongodb+srv://Nishu:Nishu123@cluster0.v8dxm.mongodb.net/Demo?retryWrites=true&w=majority';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error'));

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

passport.use(
    new localStratergy((username, password, cb) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false, { message: 'Incorrect username' });
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    return cb(null, res);
                }
                else {
                    return cb(null, false, { message: 'incorrect username or password' });
                }
            });
        });
    })
);

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, user) {
        cb(err, user);
    });
});

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(
    session({
        secret: 'cats',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 60 * 1000 * 24
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/signin', (req, res) => {
    res.render('signin');
});
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.post('/signup', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, 12, (err, hashpassword) => {
        if (err) return next(err);
        const user = new User({ username, password: hashpassword });
        user.save(err => {
            if (err) return next(err);
            res.redirect('/');
        });
    });

    // const user = new User({
    //     username: req.body.username,
    //     password: req.body.password
    // }).save(err => {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.redirect('/');
    // });
});

app.post(
    '/signin',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/'
    })
);
app.listen(3000, () => {
    console.log('app listning.....');
});
