const http = require('http');
const path = require('path');
const fs = require('fs');
const appRootPath = require('app-root-path');
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    let fsPath;
    if (req.url === '/') {
        fsPath = path.resolve(appRootPath + '/index.html');
        res.writeHead('200');
        fs.createReadStream(fsPath).pipe(res);
    }
    else if (req.url === '/contact') {
        fsPath = path.resolve(appRootPath + '/contact.html');
        res.writeHead('200');
        fs.createReadStream(fsPath).pipe(res);
    }
    else if (req.url === '/about') {
        fsPath = path.resolve(appRootPath + '/about.html');
        res.writeHead('200');
        fs.createReadStream(fsPath).pipe(res);
    }
    else {
        fsPath = path.resolve(appRootPath + '/404.html');
        res.writeHead('200');
        fs.createReadStream(fsPath).pipe(res);
    }
    fs.stat(fsPath, function (err, stat) {
        if (err) {
            console.log('error occurred...' + err);
            return res.end(req, res);
        }
        try {
            if (stat.isFile()) {
                res.writeHead('200');
                fs.createReadStream(fsPath).pipe(res);
            }
            else {
                res.writeHead('500');
            }
        } catch (e) {
            end(req, res);
        }
    });
});

server.listen(3000, err => {
    console.log(`app listning on port ${PORT}`);
});
