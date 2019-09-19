var fs = require("fs");

fs.readFile('./README.md', encoding = 'utf-8', function(err, data){
	if(err){
		console.log("읽다가 에러남")
	}
	console.log(data + "~_~");
});