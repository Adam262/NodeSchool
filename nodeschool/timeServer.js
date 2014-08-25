//learnyounode 10/13. Write a TCP time server that listens to TCP connections on the port provided by the first argument to your program. For each connection write the current date & 24 hour time in the format: "YYYY-MM-DD hh:mm" followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example: "2013-07-06 17:42".

var net = require('net'),
    strftime = require('strftime'),
    portNum = process.argv[2],
    date = new Date();

var data = '';

function dateFactory(dateMethodCalled) {
    return (dateMethodCalled < 10 ? "0" : "")+dateMethodCalled;
}

var server = net.createServer(function(socket) {
    console.log("server connected");
    socket.setEncoding('utf8');

    data =    date.getUTCFullYear() + "-" 
            + dateFactory(date.getMonth() + 1) + "-" 
            + dateFactory(date.getDate()) + " " 
            + dateFactory(date.getHours()) + ":" 
            + dateFactory(date.getMinutes()) + "\n"

    socket.end(data, function() {
        console.log("server disconnected")
    });
})
server.listen(portNum, function() {
    console.log("portNum", portNum)
})