const express = require('express');
const passport = require('passport');
require('./passoport');
const app = express();
const auth = require('./routes/auth');
app.use('/auth', auth);
app.use('/user', passport.authenticate('jwt', { session: false }), user);
