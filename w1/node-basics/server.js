var http = require('http');

// anytime a request comes in, it hits the callback, where we:
// 1. set the status code to 200
// 2. set a header content type of text/html
// (headers are like an envelope's address, stamp, return address)
// 3. res is used to communicate info back to the client
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let data = {
    "status": "200",
    "text": "Hello, World!"
  };
  res.end(JSON.stringify(data));
});

server.listen(3000);

console.log('Server listening on localhost:3000');
