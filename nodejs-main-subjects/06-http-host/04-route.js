const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response) => {
  response.writeHead(200,{ 'content-type' : 'text/html; charset=utf8' });
  if(request.method === "GET"){
    if(request.url === "/")
      response.write("Homepage");
    else if(request.url === "/about")
      response.write("About");
    else
      response.write("404 Not Found");
  }
  response.end();
});

server.listen(8080);
