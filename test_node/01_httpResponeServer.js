var server = require('http');

server.createServer(function(req, res) {
  res.writeHead(200, { 
    'Content-Type' : 'text/plain' 
  });
  res.end("Hello node.js And goorm IDE \n");
}).listen(3000);

console.log('Server is running at goorm.io');