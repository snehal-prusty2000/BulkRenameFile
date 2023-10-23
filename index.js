const fs = require('fs');
const replaceThis = "sneha"
const replaceWith = "snehal"
const preView = true;

try{
//fs.stat('/Users/joe/test.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//   }
  // we have access to the file stats in `stats`
 fs.readdir("data",(err,data)=>{
  console.log(data);
  for(let index = 0 ;index <data.length;index++){
  const Item = data[index];
  let newFile = "data/"+ Item.replaceAll(replaceThis,replaceWith)
  if(!preView){
  fs.rename("data/" +Item , newFile, ()=>{
    console.log("Rename Success")
  })
}else{
  console.log("data/" + Item + " Will be renamed to " + newFile)
}
  }
})

}catch(err){
    console.log(err);
}