const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models/index');  // 환경변수, db 설정 정보를 가져옴
const app = express();

// 포트 설정
app.set('port', process.env.PORT || 3000);

// 템플릿 엔진 연결
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,  // HTML 파일이 변경될 때 템플릿 엔진을 다시 렌더링함
});

// 서버를 실행할 때 MySQL과 연동된다.
sequelize.sync({force: false})  // true면, 서버를 실행할 때마다 테이블을 재생성
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

// app.use : 미들웨어 기능을 마운트하거나 지정된 경로에 마운트하는 데 사용
app.use(morgan('dev')); // 요청, 응답에 대한 추가적인 로그를 제공
app.use(express.static(path.join(__dirname, 'public')));  // 정적 파일 제공

// body-parser. http 요청 메시지에서 body데이터를 해석하기 위한 처리
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// 404 에러 내용부분만 만들어서 최종 처리를 에러 처리 미들웨어에 보냄
app.use((req, res, next) => { 
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);  // 에러 미들웨어로 점프
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};  // 개발 환경이면 err를 출력
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), "빈 포트에서 대기중");
});