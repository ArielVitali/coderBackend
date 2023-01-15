const http = require("http");

const server = http.createServer((req, response) => {
  response.end("Hi");
});

server.listen(8080, () => {
  console.log("Server running");
});
