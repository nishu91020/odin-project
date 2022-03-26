const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passoport = require('passport');

router.post('/login', function (req, res, next) {
    passoport.authenticate(local, (err, user, info) => {
        if (err || !user) {
            return res.status(404).json({
                message: 'something went wrong',
                user: user
            });
        }
        req.login(user, { session: false }, err => {
            if (err) {
                res.status(404).json('something went wrong');
            }
            const token = jwt.sign(user, 'secret');
            return res.json({ user, token });
        });
    })(req, res);
});
