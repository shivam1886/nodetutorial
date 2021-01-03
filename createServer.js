const http = require('http')
 
http.createServer((req,res)=>{

  res.writeHead(200,{
      'content-type' : 'text/json'
  })
  res.write('Hello Word');
  res.end();

}).listen(8000,'127.0.0.1',function(){
    console.log('Server run on at 127.0.0.1:8000')
})