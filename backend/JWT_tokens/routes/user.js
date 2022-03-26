const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('user default route');
});

router.get('profile', (req, res, next) => {
    res.send(req.user);
});

module.exports = router;
