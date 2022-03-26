const { v4: uuidv4 } = require('uuid');
const express = require('express');
uuidv4();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch'
    },
    2: {
        id: '2',
        username: 'Dave Davids'
    }
};
let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1'
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2'
    }
};
app.get('/users', (req, res, next) => {
    res.send(Object.values(users));
});
app.post('/messages', (req, res, next) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text
    };

    messages[id] = message;

    return res.send(message);
});
app.get('/messages', (req, res, next) => {
    res.send(Object.values(users));
});
app.put('/users/:id', (req, res, next) => {
    res.send(`PUT method on user ${req.params.id} resource`);
});
app.post('/users', (req, res, next) => {
    res.send('POST method on user resource');
});
app.delete('/users', (req, res, next) => {
    res.send(`DELETE method on ${req.params.user} user resource`);
});
app.listen(3000);
