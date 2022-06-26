require('dotenv').config()

const express = require('express');
const app = express();

let COLOR = process.env.MYCOLOR || "blue"
let NUMBER = process.env.NUMBER || 1
let PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send(`FGR DEMO API ROOT from port ${PORT}`)
});

console.log("COLOR:", COLOR)

app.get('/color',(req,res)=>{
    res.status(200).json({color:COLOR})
});

console.log("NUMBER:", NUMBER)

app.get('/number',(req,res)=>{
    res.status(200).json({number:parseInt(NUMBER)})
});



// Start Express Server
app.listen(PORT,(err)=>{

    if(err){
        console.log("ERROR: ",err);
    }else{
        console.log(`Running on port ${PORT}`);
    }
});