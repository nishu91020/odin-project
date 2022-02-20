const path = require('path');
const os = require('os');
const file = './app.js';
console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.basename(file));
console.log(path.basename(file, path.extname(file)));
//notes
console.log(path.resolve(file));
path.parse('/CSS foundations/grid-style.css');

console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.userInfo());
