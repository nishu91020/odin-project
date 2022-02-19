const fs = require('fs');

fs.open('./app.js', 'r', (err, fd) => {
    if (err) {
        console.log('error');
    }
    console.log(fd);
});
fs.stat('./app.js', (err, stats) => {
    if (err) {
        console.log('err');
    }
    console.log(stats);
});
try {
    let stat1 = fs.statSync('./app.js');
    console.log('statsync is', stat1);
} catch (err) {
    console.log('err');
}
try {
    let fd1 = fs.openSync('./app.js');
    console.log('openSync is', fd1);
} catch (err) {
    console.log('err');
}
