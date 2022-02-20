const fs = require('fs');

fs.writeFile('./file.txt', 'hello', { flag: 'a+' }, err => {
    if (err) {
        console.log(err);
        return;
    }
});
fs.appendFile('./file.txt', 'hello nishu!!', err => {
    if (err) {
        console.log(err);
        return;
    }
});
let data = 'hello world!!';
try {
    fs.writeFileSync('./file.txt', data, { flag: 'a+' });
} catch (err) {
    console.log(err);
}
//file gets overwritten by the content
