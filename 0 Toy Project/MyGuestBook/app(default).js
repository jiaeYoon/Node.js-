const express = require('express');   // 익스프레스에 http 모듈이 내장되어 있어 서버 역할을 할 수 있다.
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
// app.set(key, value) : 데이터를 저장한다.
// - app.set('port', 포트) : 서버가 실행될 포트를 설정한다.
// process : 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고있다.
// process.env : 시스템의 환경변수

app.get('/', (req, res) => {
  // res.send('Hello Express');
  res.sendFile(path.join(__dirname, '/index.html'));
});
// app.get(key) : 데이터를 가져온다.
// app.get(주소, 라우터) : 주소에 대한 get 요청이 올때 어떤 동작을 할지 정한다.
// res.send(message) : 요청시 응답으로 message를 전송한다.
// res.sendFile() : HTML로 응답할 수 있다.
// __dirname : 실행 시 현재 파일 경로로 바뀐다.

app.listen(app.get('port'), () => {
  console.log(app.get('port'), "빈 포트에서 대기중");
});
// app.listen(포트번호, 포트 연결 완료 후 실행될 콜백 함수) : 서버는 해당 포트에서 요청이 오기를 기다림
// 포트를 app.get('port')로 가져온다.