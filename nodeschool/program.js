//LEARNYOUNODE
//see live code at: http://repl.it/W9Z;

//learnyounode 2/13. Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
var a = process.argv.slice(2).reduce(function(a,b){
      return (Number(a)+Number(b));
});
console.log(a);
