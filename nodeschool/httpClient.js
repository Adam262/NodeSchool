//learnyounode 7/13. Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http'),
    url = process.argv[2.];

http.get(url, function(res){
    //console.log("Got response: " + res.statusCode);
    res.setEncoding('utf8');
    res.on("data", function(data){
       //if (err) return console.error("second cb threw error: ", err);
       console.log(data);
  });
    res.on("error", function(error){
          console.log("error: ", error);
        })
})


