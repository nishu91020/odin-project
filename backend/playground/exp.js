const express = require('express');
const wiki = require('./routesDemo.js');
app = express();

const PORT = 3000;
app.get('/', (req, res) => {
    res.send('hello!!');
});
app.use('/wiki', wiki);
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`);
});
