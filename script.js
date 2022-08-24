const http = require("http");

function handelRequest (request, response) {
    response.statusCode = 200;
    response.end('<h1>Hello World!<h2>')
}
const server = http.createServer(handelRequest);

server.listen(3000);


