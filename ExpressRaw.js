const express = require('express');
const app = express();
const PORT = 3000 ;

app.use(express.raw());
app.post('/', function(req,res){
    console.log(req.body);
    res.end();
})
app.listen(PORT,(error) =>{
    if(error)
    console.log("Server is Success!!!" + PORT);
else 
console.log("Error Occurrend....");
})