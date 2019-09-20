//server.js


var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	fs = require('fs');


app.listen(3000);

function handler(req, res){
	fs.readFile('index.html', function(err, data){
		if(err){
			res.writeHead(500);
			return res.end('파일 읽다 서버 오류났어요~');
		}
		res.writeHead(200);
		res.end(data);
	});
}

io.on('connection', function(socket){
	socket.emit('news', { serverData : "서버에서 새 소식을 전했다."});
	
	socket.on('client login', function (data){
		console.log('클라이언트 접속');
	});
	
	socket.on('disconnect', function(){
		console.log('접속 종료');
	});
});