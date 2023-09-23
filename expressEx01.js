const express = require('express');

const app = express();  //Express 모듈을 실행해 app 변수에 할당한다.
/*
    app.set('port', 포트)로 서버가 실행될 포트를 설정한다.
    process.env 객체에 PORT 속성이 있다면 그 값을 사용하고, 없다면 기본값으로 
    3000번 포트를 이용하도록 되어 있다.
    이렇게 app.set(키, 값)을 사용해서 데이터를 저장할 수 있다.
    나중에 데이터를 app.get(키)로 가져올 수 있다.
*/
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});    