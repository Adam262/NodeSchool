//learnyounode 5/13. Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt.  The list of files should be printed to the console, one file per line. You must use asynchronous I/O.
var fs = require("fs"),
    path = require("path"),
    dir = process.argv[2],
    file_ext = process.argv[3];

fs.readdir(dir, function(err, list){
    if (err) throw err;
    var a = [];
      list.forEach(function(err,el){
        if (path.extname(list[el])=="."+file_ext){
        a.push(list[el]);
    }
  })
      console.log(a.join("\n"));
})