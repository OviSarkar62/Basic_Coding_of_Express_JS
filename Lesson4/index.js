// Static Middleware
const env = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

/*const myMiddleware = (req, res, next)=>{
    console.log("Middle ware function");
    req.currentTime = new Date(Date.now());
    next();
}*/

/*app.use(myMiddleware);

app.get("/", (req,res)=>{
    console.log("I am home at " + req.currentTime) 
    res.send(`<h1 align="center">Home route</h1>`);
})

app.get("/about", (req,res)=>{
    console.log("I am about at " + req.currentTime) 
    res.send(`<h1 align="center">About route</h1>`);
})*/
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});