
function dashnFilefun(contentArr){

       let count=1;
       let tempArr=[];
       for(let i=0;i<contentArr.length;i++){
            tempArr.push(count +" "+ contentArr[i]);
            count++;
       }
    //    console.log(tempArr);
       content=tempArr.join("\n");
       console.log(content);
    }

module.exports ={
    dashnFilefun:dashnFilefun
 }