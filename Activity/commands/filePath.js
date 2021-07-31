
let fs=require('fs');

function filescontent(inputPath){
   let content= fs.readFileSync(inputPath);
   console.log(""+content);
}

module.exports ={
   filecontent:filescontent
}