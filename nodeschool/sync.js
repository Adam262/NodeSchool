
//leanryounode 3/13. Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require("fs");
var buf = fs.readFileSync(process.argv[2]);//returns native Node buffer data object that must be converted to human-readable text
var str = buf.toString().split('\n');

console.log(str.length-1);//account for no newline in final line of text