const express = require('express');

app = express();

const PORT = 3000;
app.get('/', (req, res) => {
    res.send('hello!!');
});
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`);
});
