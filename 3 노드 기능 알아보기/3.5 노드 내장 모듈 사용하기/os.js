const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());   // 운영체제 부팅 후 흐른 시간(초)을 보여줌
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());   // 임시 파일 저장 경로를 보여줌

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus());   // 컴퓨터의 코어 정보를 보여줌
console.log('os.cpus().length:', os.cpus().length);   // 코어 개수를 보여줌

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem());   // 사용 가능한 메모리(RAM)를 보여줌
console.log('os.totalmem():', os.totalmem()); // 전체 메모리 용량을 보여줌