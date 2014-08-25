//learnyounode 8/13. Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout). The first line you write should just be an integer representing the number of characters received from the server and the second line should contain the complete String of characters sent by the server.

var http = require('http'),
    bl = require('bl'),
    url  = process.argv[2];

http.get(url, function(res){
  res.pipe(bl(function(err,data){
    if (err) return console.error("error: ", err)
    console.log(data.toString().split("").length);
        var charArr = data.toString().split("");
        //console.log(charArr);
        var baseStr = "";
        var singleStr = charArr.forEach(function(el){
            return baseStr += el;   
        })
        console.log(baseStr);
  }))
})


 
