const http = require('http');
const PORT = 8080;
const ProgressBar = require('progress');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('content-type', 'text/plain');
    readline.question(`What's your name?`, name => {
        console.log(`Hi ${name}!`);
        readline.close();
    });
    res.end(`hello  world\n`);
});

server.listen(PORT, () => {
    console.log(`server running at ${PORT} `);
    const args = require('minimist')(process.argv.slice(2));
    console.log(args['name']);
    console.log('first');
    console.log('\x1b[33m%s\x1b[0m', 'hi!');
    var bar = new ProgressBar(':bar', { total: 10 });
    var timer = setInterval(function () {
        bar.tick();
        if (bar.complete) {
            console.log('\ncomplete\n');
            clearInterval(timer);
        }
    }, 100);
});

process.on('SIGTERM', () => {
    console.log('process ended');
});
