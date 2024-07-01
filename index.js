const { log } = require("console");
const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
res.send("Hello World");
})

app.get("/sum",(req,res)=>{
 a=req.body.a;
 b=req.body.b;
 res.json({"Sum":a+b});   
})

app.listen(3000,function(){
    console.log("Server is running");
});