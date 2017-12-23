var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", function (request, response){
    response.setHeader("Content-Type", "text/html", "charset-utf-8");
        if (request.method === "GET" && request.url ==="/start"){
            fs.readFile('./index.html', function(err, data) {
                response.write(data);
                response.end();
                });
        } else{
            response.setHeader("Content-Type", "image/jpg");
            response.statusCode = 404;
            fs.readFile('./404.jpg', function(err, data) {
                response.write(data);
                response.end();
                });
        }

});

server.listen(8080);


// var http = require("http");


// var server = http.createServer();

// server.on("request", function (request, response){
//     response.setHeader("Content-Type", "text/html", "charset-utf-8");
//         if (request.method === "GET" && request.url ==="/start"){
//                 response.write("boom");
//                 response.end();
//         } else{
//             response.statusCode = 404;
//             response.write("złe boom");
//             response.end();
//         }

// });





// var http = require('http');

// var server = http.createServer();
// server.on('request', function (request, response) {
//     response.write('Hello world!');
//     response.end();
// });
// server.listen(9000);