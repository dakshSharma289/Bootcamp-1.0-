const fs = require("fs");

function readFilePromisified(filePath, encoding){
    return new Promise(function(resolve, reject){
        return fs.readFile(filePath, encoding, function(err, data){
            if(err){
                reject("there was an error while reading the file");
            } else {
                resolve(data);
            }
        })
    }) 
}

readFilePromisified("a.txt", "utf-8")
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})