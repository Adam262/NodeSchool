var http = require('http'),
    fs = require('fs'),
    map = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function(req,res) {
  if (req.method != "POST")
      return res.end('Oops. Try a POST method');
          else {req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
              })).pipe(res);
        }
})


server.listen(port, function() {
    console.log("Listening on port " + port);
})