var util = require('util');

var data = util.format('%d %s %j', 123, 'test', { '이건' : '제이슨?'});

console.log(data);
