const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Middleware Chala")
    next();
})

app.get("/",(req,res)=>{
  res.send("Champion mera anuj")
})

app.get("/profile",(req,res,next)=>{
    return next(new Error("Something went worng"))
  })

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000);