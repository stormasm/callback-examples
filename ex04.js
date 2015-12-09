// http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4

var http = require('http');
var fileSystem = require('fs');
var port = 3000;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var read_stream = fileSystem.createReadStream('foo.txt');
    read_stream.on('data', writeCallback);
    read_stream.on('close', closeCallback);

    function writeCallback(data){
        response.write(data);
    }

    function closeCallback(){
        response.end();
    }

}).listen(port);

console.log('Server started on port '+port);
