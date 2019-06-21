const Jimp = require('jimp');
const fs = require("fs");
const path = require("path");


// Make the build folder this is your output folder
const buildDir = './build/img';

if (!fs.existsSync(buildDir)){
    fs.mkdirSync(buildDir,{ recursive: true });
}

// Make the src folder this is your input folder
const srcDir = './src/img';

if (!fs.existsSync(srcDir)){
    fs.mkdirSync(srcDir,{ recursive: true });
}

// this loops over files in the src dir
if (fs.existsSync(srcDir)){
    console.log("Please wait working on files");
    fs.readdir("./src/img/",function(err,data){
        data.forEach(element => {
            if (path.extname(element) == '.jpg'){
                Jimp.read( __dirname+"/src/img/"+element).then(tmp => tmp.resize(1920,795).quality(60).writeAsync("build/img/"+path.basename(element))).catch(err =>{
                    console.error(err);
                })
                Jimp.read( __dirname+"/src/img/"+element).then(tmp => tmp.resize(350,200).quality(50).writeAsync("build/img/"+"small_"+path.basename(element))).catch(err =>{
                    console.error(err);
                })
            }
        });
        if (err){
            console.error(err);
        }
    })
}else{
    console.log("Src Folder not created");
}
