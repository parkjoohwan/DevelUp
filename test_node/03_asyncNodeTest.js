var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str){
	console.log("Hi\n\n" + str);
});

setTimeout(function(){
	evt.emit("helloNode", "3초뒤에 실행한다");
}, 3000);
