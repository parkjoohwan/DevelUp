var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function(){
	console.log('콜 이벤트 함수');
});


console.log('이벤트 실행');
custom_event.emit('call');

console.log('이벤트 제거')
custom_event.removeAllListeners();

console.log('다시 이벤트 실행하면 아무일도 안일어남');
custom_event.emit('call');