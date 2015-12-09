// http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4

var http = require('http');
var fileSystem = require('fs');
var port = 3000;

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var read_stream = fileSystem.createReadStream('foo.txt');
    read_stream.on('data', writeCallback);
    read_stream.on('close', closeCallback);

    function writeCallback(data){
        console.log('part1')
        response.write(data);
    }

    function closeCallback(){
        console.log('part2')
        response.end();

    console.log('part3')
    }
}

http.createServer(requestListener).listen(port);

console.log('Server started on port '+port);
