//learnyounode 9/13. This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments. You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http'),
    bl = require('bl'),
    async = require('async'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];


async.waterfall([
  function(callback) {
    http.get(url1, function(res){
      res.pipe(bl(function(err,data1){ 
        // if (err) return console.error("error: ", err);
        data1 = data1.toString();
        console.log(data1);
        callback(null,data1);

      }))
    })
  },


  function(data1,callback) {
    http.get(url2, function(res){
      res.pipe(bl(function(err,data2){ 
        // if (err) return console.error("error: ", err);
        data2 = data2.toString();
        console.log(data2);
        callback(null,data2);

      }))
    })
  },

  function(data2, callback) {
    //console.log(arguments)
    http.get(url3, function(res){
      res.pipe(bl(function(err,data3){ 
        // if (err) return console.error("error: ", err);
        data3 = data3.toString();
        console.log(data3);
        callback(null, data3);
      }))
    })
    
  },

  ], 
  function (err, data3) {
    // if (err) return console.error("error: ", err);
    //console.log("data3: " + data3);
  })