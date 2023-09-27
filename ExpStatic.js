const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(Path.join(__dirname,'Views')))

app.get('/', function(req,res,next){
    res.render('Home.ejs');
})

app.listen(PORT, function(err){
    if(err)console.log(err);
    console.log("Server listening on PORT", PORT);
});