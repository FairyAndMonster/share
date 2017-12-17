var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request',(req,res) => {
	// console.log('收到客户端请求');
	fs.readFile('./share.html',(err,data) => {
		// console.log(1)
		res.end(data);
	})
})
server.listen(5000,function() {
	console.log("running...")
})