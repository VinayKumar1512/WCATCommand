let fs = require("fs");
let filePathObj = require("./commands/filePath");
let dashbFileObj = require("./commands/dashbfilePath");
let dashsFileObj = require("./commands/dashsFilePath");
let dashnFileObj = require("./commands/dashnFilePath");
let dashsbFileObj=require("./commands/dashsbFilePath");
let dashsnFileObj=require("./commands/dashsnFilePath");

let inputArr = process.argv.slice(2);
let optionsArr = [];
let filesArr = [];

for (let i = 0; i < inputArr.length; i++) {
  let firstChar = inputArr[i].charAt(0);

  if (firstChar == "-") {
    optionsArr.push(inputArr[i]);
  } else {
    filesArr.push(inputArr[i]);
  }
}


let content = "";

for (let i = 0; i < filesArr.length; i++) {
  let ans = fs.existsSync(filesArr[i]);

  if (ans == false) {
    console.log("Files doesn't Exist");
    return;
  }
  content = content + fs.readFileSync(filesArr[i]) + "\r\n";
}


let contentArr = content.split("\r\n");

if (
  optionsArr[0] !== "-s" &&
  optionsArr[0] !== "-n" &&
  optionsArr[0] !== "-b"
) {
  for (let i = 0; i < filesArr.length; i++) {
    let ans = fs.existsSync(filesArr[i]);

    if (ans == false) {
      console.log("Files doesn't Exist");
      return;
    }
    let filepath = filesArr[i];
    filePathObj.filecontent(filepath);
  }
}
else if(optionsArr[0] == "-s" && optionsArr[1] == "-n") {

    dashsnFileObj.dashsnFilefun(contentArr);

} else if (optionsArr[0] == "-s" && optionsArr[1] == "-b") {

    dashsbFileObj.dashsbFilefun(contentArr);

}
else if(optionsArr[0] == "-n" && optionsArr[1] == "-b"){

  dashnFileObj.dashnFilefun(contentArr);

}
else if(optionsArr[0] == "-b" && optionsArr[1] == "-n"){


  dashbFileObj.dashbFilefun(contentArr);
  
}
else if (optionsArr[0] == "-s") {

  dashsFileObj.dashsFilefun(contentArr);

} else if (optionsArr[0] == "-n") {

  dashnFileObj.dashnFilefun(contentArr);

} else if (optionsArr[0] == "-b") {

  dashbFileObj.dashbFilefun(contentArr);

}