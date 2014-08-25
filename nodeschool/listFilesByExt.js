var fs = require("fs"),
    path = require("path");

module.exports = function(dir, extStr, callback) {
  fs.readdir(dir, function(err, list) {
        if (err) {return callback(err)};
        var a = [];
        list.forEach(function(err, el) {
            if (path.extname(list[el]) === "." + extStr) {
                a.push(list[el]);
            }

        })
        callback(err, a);
    })
}