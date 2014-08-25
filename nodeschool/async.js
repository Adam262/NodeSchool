//leanryounode 4/13. Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
var fs = require("fs");
var buf = fs.readFile(process.argv[2], function(err, data){
  if (err) throw err;
  var newLineCount = data.toString().split('\n');
  console.log(newLineCount.length-1); 
})