const express = require('express');
const app = express();
const PORT = 3000;

const r1 = express.Router();
const r2 = express.Router();
const r3 = express.Router();

r1.get('/user', function(req,res,next){
    console.log("User Router Working....");
    res.send("<h1>User Routing</h1>");
    res.end();
});

r2.get('/admin', function(req,res,next){
    console.log("User Admin Working...");
    res.send("<h1>Admin Routing</h1>");
    res.end();
});

r3.get('/student', function(req,res,next){
    console.log("User Rounting Student");
    res.send("<h1>Student Routing</h1>");
    res.end();
});

app.use(r1);
app.use(r2);
app.use(r3);

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log("Server Running....");
});