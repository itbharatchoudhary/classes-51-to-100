const express = require("express");

const app = express();  // server instance create krna


app.get("/",(req,res) =>{
 res.send(" world");
});

app.get("/about",(req,res) =>{
 res.send("Hello world this is about page");
});




app.listen(3000);   // server start krna

