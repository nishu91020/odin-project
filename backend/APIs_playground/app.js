const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.get('/', (req, res) => {
    res.json({
        message: 'welcome'
    });
});
app.post('/api/posts', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                message: 'post created',
                authData
            });
        }
    });
    res.json({ message: 'post successful' });
});
app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'nishu',
        email: 'rainishu@gmail.com'
    };
    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({ token });
    });
});

function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
}
app.listen(3000);
