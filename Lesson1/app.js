// Http methods
const express = require("express");
const app = express();
const userRouter = require("./routes/usersRoute");

app.use("/api/user", userRouter);

// Sending Json file
app.use("/register",(req,res)=>{
    res.status(200).json({
        message:"I am sending JSON file",
        statusCode:200
    });
});

// Sending Cookie
app.use("/login",(req,res)=>{
    res.cookie("name", "Ovi_Sarkar");
    res.end();
});

// Appending Header
app.use("/users",(req,res)=>{
    res.append("id", "1610052");
    res.end();
});

// Sending Html File
app.use("/", (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/index.html');
});

app.use((req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

module.exports = app;