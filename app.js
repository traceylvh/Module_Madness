var http = require('http');
var randomUSD = require('./accountBalance');

http.createServer(function(req,res){
  res.writeHead(200);
  res.write(randomUSD.print() + randomUSD());
  res.end();
}).listen(8000);
