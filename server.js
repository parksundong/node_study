const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

//라우팅 개념 => 라우터를 정해준다.  
app.get('/', function (req, res) {
    res.send('Welcome to My Homepage');
});

app.get('/about', function (req, res) {
    res.send('about page');
});


