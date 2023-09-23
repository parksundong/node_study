const express = require('express');
const app = express();
const server = app.listen(3001, () => {
	console.log('Start Server : localhost:3001');
});

//콜론이 있는 패스에는 어떤 값이든 들어올 수 있다.
app.get('/api/users/:type', async (req, res) => {
	let { type } = req.params;
	
	if(type == 'seoul') {
		let data = [
			{name:"홍길동", city:"seoul"},
			{name:"김종호", city:"seoul"},
		];
		res.send(data);
	}else if(type == 'jeju') {
		let data = [
			{name:"박지성", city:"jeju"},
			{name:"손흥민", city:"jeju"},
		];
		res.send(data);
	}else {
		res.send('Type is not correct.');
	}	
});
