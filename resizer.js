const Jimp = require('jimp');
const fs = require("fs");
const path = require("path");

 fs.readdir("./src/img/",function(err,data){
    data.forEach(element => {
        if (path.extname(element) == '.jpg'){
            console.log(path.resolve(element));
            Jimp.read( __dirname+"/src/img/"+element).then(tmp => tmp.resize(1920,795).quality(60).write(path.basename(element)+"_small.jpg")).catch(err =>{
                console.error(err);
            })
        }
        
    });
    
})
