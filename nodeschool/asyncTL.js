    var http = require('http'),
        bl = require('bl'),
        args = process.argv.splice(2),
        arrData = [],
        counter = 0;

    //when called, console.log array of data parsed to string
    function getArrData() {
      arrData.forEach(function(el){
        console.log(el)
      })
    }

    function httpGet(index) {
        http.get(args[index], function(res) {
            res.pipe(bl(function(err, data) {
                if (err) return console.error("error: ", err)

    //populate array of strings parsed from each url of process.argv 

                arrData[index] = data.toString()
                counter++;

    //check if all async get requests are complete 
                counter == arrData.length?
                    getArrData():
                    "";
            }))
        })
    }
    //call httpGet over process.argv
    for (var index in args){
      httpGet(index);
    } 
  