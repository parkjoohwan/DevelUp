var fs = require('fs');
 

// 비동기적 읽기
fs.readFile('README.md', 'utf8', function(err, data) {
    console.log(' --- Read Async ---\n\n' + data);
});

// 동기적 읽기
var text = fs.readFileSync('README.md', 'utf8');
console.log(' --- Read Sync ---\n\n' + text);

// 비동기적 파일 쓰기
var content = '파읽 쓰기 테스트 문자열';

fs.writeFile('text.txt', content, 'utf8', function(err){
	console.log('완료');
});

// 예외처리
try{
	var errTest = fs.readFileSync('errorfile.txt', 'utf8');
}
catch(err){
	console.log('없는 파일을 읽어?');
}