var http    = require('http'),
    url     = require('url'),
    port    = process.argv[2],
    output  = {};

var server  = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'application/json'
    });

    var par  = url.parse(req.url, true),
        path  = par.pathname,
        date  = Date.parse(par.query.iso);

    if (req.method === "GET") {
        if (path == "/api/parsetime") {
            date = new Date(date);
           
                output = {
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }
        };
        if (path == "/api/unixtime") {

                output = {
                    unixtime: date
                }
        }
    
    res.end(JSON.stringify(output));
    }
})

server.listen(port, function() {
    console.log("listening on port " + port)
})

