const {
  Worker, isMainThread, parentPort,
} = require('worker_threads');
 
if (isMainThread) { // 부모일 때
  const worker = new Worker(__filename);  // 현재 파일을 워커 스레드에서 실행시킴
  worker.on('message', message => console.log('from worker', message));
  worker.on('exit', () => console.log('worker exit'));
  worker.postMessage('ping');
} else {  // 워커일 때
  parentPort.on('message', (value) => {
    console.log('from parent', value);
    parentPort.postMessage('pong');
    parentPort.close();
  });
}