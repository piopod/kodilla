var fs = require('fs');
var colors = require("colors");

fs.readdir("./doczytania", "utf-8", function (err, files){
    console.log(files);

    fs.writeFile("./poczytaniupo.txt",files, function(err){
        if (err) throw err;
        console.log("Zapisano!".blue);
    });

});