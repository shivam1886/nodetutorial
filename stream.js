const fs = require('fs');

const readableStream = fs.createReadStream('readme.txt');

var data = '';

readableStream.setEncoding('UTF8');

readableStream.on('data',function(chunt){
    data +=chunt;
});

readableStream.on('end',function(){
    console.log(data);
});

const writeableStream = fs.createWriteStream('readme.txt');
const writeData = 'Hello Shiv! thik ho na';
      writeableStream.write(writeData,'UTF8');
      writeableStream.end();
      writeableStream.on('finish',function(){
          console.log('Write completed');
      })
      

