// learnyounode 6/13. This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

//Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

// var fs = require("fs"),
//     path = require("path"),

var listFilesByExtension = require("./listFilesByExt.js"),
    dirCLI = process.argv[2],
    file_extCLI = process.argv[3];

var logNewLine = function(err, arr) {
      if (err) {return console.error("There was an error: ", err)};
      console.log(arr.join("\n"));
      //console.log(arr);
    }
listFilesByExtension(dirCLI, file_extCLI, logNewLine);
// console.log(a.join("\n")); // must print to module from original program file. do not print from module. 