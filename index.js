const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('{"success":true, "data":"Index", "message":"Hello World", "code":200}');
}).listen(process.env.PORT || 9000);