const express = require('express');
const app = express()
const PORT = 3000;

app.use('/',(req,res) => {
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

app.listen(PORT, (error) => {
    if(error)
    console.log("Server is success!!!"+ PORT);
else
console.log("Error Occerred");
})