const express = require('express');
const app = express();     //express 내부에 http 모듈이 내장되어 있으므로 서버의 역할을 할 수 있다.
/*
  미들웨어는 Express의 핵심이다.
  요청과 응답의 중간(middle)에 위치하여 미들웨어라 부른다.
  static 미들웨어는 정적인 파일들을 제공하는 라우터 역할을 한다.
기본적으로 제공되기에 따로 설치할 필요 없이 express 객체 안에서 꺼내 장착하면 된다.
public 폴더를 만들고 이미지 파일들을 public 폴더에 넣으면 브라우저에서 접근할 수 있게 된다.
서버의 폴더 경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악할 수 없다. 이는 보안에 큰 도움이 됨!!
  [사용 방법]
  app.use('요청 경로', express.static('실제 경로'));
*/
app.use('/', express.static('public'));	//app.use(‘/’, 미들웨어)   => ‘/’로 시작하는 요청에서 미들웨어 실행
const port = 3000

app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 대기 중...`)
})  
