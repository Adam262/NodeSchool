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