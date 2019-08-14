var WebSocket = require('ws').Server,
	wss = new WebSocket({port:8181});

	wss.on('connection',function(ws){
		console.log('Client connected');
		ws.on('message',function(message){
			console.log(message);
		});
	});

	wss.listen(8181);