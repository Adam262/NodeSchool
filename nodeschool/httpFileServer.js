var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    pathToFile = process.argv[3];

var server = http.createServer(function(req, res) {
   res.writeHead(200, { 'content-type': 'text/plain' })
      fs.createReadStream(pathToFile)
          .pipe(res);
})

server.listen(Number(port))
console.log("server listening at port " + port)