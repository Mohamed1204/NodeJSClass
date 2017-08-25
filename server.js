// http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write('"Title" : "Hello Json web API" "text" : Text fra min API');
    res.end();
});

server.listen(process.env.Port || 3003);