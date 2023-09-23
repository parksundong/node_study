const express = require('express') //express 모듈 불러오기
const app = express()  //Express 모듈을 실행해 app 변수에 할당한다.
const port = 3000


app.get('/', (req, res) => { 
    res.send('Hello, Express 웹 서버 만들기 테스트 중... Good 잘됨')
})

app.listen(port, () => {
    console.log(`${port}번 포트에서 대기 중...`)
})   
