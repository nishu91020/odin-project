const axios = require('axios');
const http = require('http');

const server = http.createServer(async (req, res) => {
    try {
        let content = await axios.get('https://en.wikipedia.org/wiki/Birthday');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        console.log(content.data);
        res.end(content.data);
    } catch (err) {
        res.statusCode = 404;
        res.end('wrong URL...page not found!!');
    }
});

server.listen(3000, () => {
    console.log('server running on port 3000');
});
