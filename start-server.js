const http = require('http');
const url  = require('url');

const server = (router,handle) => {
    http.createServer((req,res) => {
        const pathName = url.parse(req.url).pathname;
          router(handle,pathName,res);
    }).listen(8000);
}

exports.run = server;