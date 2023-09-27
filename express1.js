// var el = require('express');
// var app = el()
// app.get("/", function(req,res){
//     res.send("Welcome to the app vication");
// });
// app.listen(4000);


const { error } = require('console');
const el = require('express');
const app = el();
const PORT = 4000;

app.get("/sample", (req,res) => {
    res.set('Content-Type','text/html');
    res.status(200).send('<h1> Welcome to the my Application</h1>')
});

app.listen(PORT, (error) => {
    if(error)
    console.log("Server is Running..");
else
console.log("Server Error!!!");

});