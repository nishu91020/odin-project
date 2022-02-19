const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end({ message: 'hello world!!!!!!' });
});
server.listen(3000, () => {
    console.log('server running on port 3000');
});
