
function dashbFilefun(contentArr){
    
    let content="";
      
      let count=1;
      let tempArr=[];
       for(let i=0;i<contentArr.length;i++){
        
        if(contentArr[i]!==""){
            tempArr.push(count+" "+ contentArr[i]);
            count++;
        }
        else{
            tempArr.push(contentArr[i]);
        }
            
       }
       contentArr=tempArr;
       content=contentArr.join("\n");
       console.log(content);

    }


module.exports ={
    dashbFilefun:dashbFilefun
 }