const fs = require('fs');

fs.readFile('./app.js', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
});
try {
    data = fs.readFileSync('./getReq.js', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}
//for big files a better option is to read the file content using streams.
