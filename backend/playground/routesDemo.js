const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wiki home page');
});

router.get('/about', (req, res) => {
    res.send('This is about page of wiki');
});

module.exports = router;
