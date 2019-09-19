function Foo(){
	console.log('친근한 푸함수');
}

Foo.prototype = {
	bar : function(){
		console.log('뿌빠');
	}
};

function Bar(){
	console.log('푸와친한 바');
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function(){
	console.log('빠빠쯔');
}

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();
Foo();
Bar();

var util = require('util');

function InheritsTest() {
}

util.inherits(InheritsTest, Foo);

InheritsTest.prototype.test = function() {
	console.log('InheritsTest test 실행');
};

Foo.prototype.bar();
InheritsTest.prototype.bar();
InheritsTest.prototype.test();
