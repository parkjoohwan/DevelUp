// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app); 
var io = require('socket.io')(http);    
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {  
  res.render('chat');
});

var count=1;
var namelist = [];

io.on('connection', function(socket){ 		// 채팅방 접속
  	console.log('user connected: ', socket.id);  
  	var name = "익명" + count++;                 
	socket.name = name;
  	io.to(socket.id).emit('create name', name);   
	io.emit('new_connect', name);
	namelist.push(name);
	io.emit('who is here', namelist);
	
	socket.on('disconnect', function(){ 	// 채팅방 접속 해제
	  console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	  namelist.splice(namelist.indexOf(socket.name),1);
	  io.emit('new_disconnect', socket.name);
	});

	socket.on('send message', function(name, text){ 	// 메세지 전송
		var msg = name + ' : ' + text;
		if(name != socket.name)							// 닉네임 변경
			io.emit('change name', socket.name, name);
		socket.name = name;
    	console.log(msg);
    	io.emit('receive message', msg);
	});
	
	
});

http.listen(3000, function(){ 
	console.log('server on..');
});