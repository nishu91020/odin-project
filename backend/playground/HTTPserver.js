const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end({ message: 'hello world!!!!!!' });
    console.log(server.hasHeader('Content-Type'));
});
server.listen(3000, () => {
    console.log('server running on port 3000');
});

console.log(http.METHODS);
console.log(http.STATUS_CODES);
console.log(http.globalAgent);
