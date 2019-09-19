var server = require('http');
var fs = require("fs");

server.createServer(function(req, res) {
  res.writeHead(200, { 
    'Content-Type' : 'text/plain; charset=utf-8' 
  });
	
  fs.readFile('./README.md', encoding = 'utf-8', 		
	function(err, data){
		if(err){
			console.log("파일 읽기 에러", err)
			throw err;
		}
		res.end( data );
	});
	
}).listen(3000);

console.log('Server is running at goorm.io');