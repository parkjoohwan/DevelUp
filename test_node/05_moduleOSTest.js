var os = require('os');

console.log(os.tmpdir());
console.log(os.type());

var cpus = os.cpus();

console.log("CPU는 몇개? " + cpus.length);
console.log("model: " + cpus[0].model);
console.log("speed: " + cpus[0].speed);
