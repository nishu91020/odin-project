const fs = require('fs');
const path = require('path');
try {
    if (!fs.existsSync('./random')) {
        fs.mkdirSync('./random');
    }
} catch (err) {
    console.log(err);
}
fs.readdirSync('../playground').map(filename => {
    return path.join('../playground', filename);
});
fs.rm('./random', { recursive: true, force: true }, err => {
    if (err) {
        console.log(err);
    }
    console.log('deleted file');
});
