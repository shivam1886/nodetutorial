const fs = require('fs');

const readableStream   = fs.createReadStream('in.txt');
const writerableStream = fs.createWriteStream('out.txt');

readableStream.pipe(writerableStream);