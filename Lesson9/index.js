// Morgan Middleware & Chalk
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const app = express();
const PORT = 3000;

app.use(morgan("dev"));

app.get("/users", (req,res)=>{
    res.send("All the users");
})

app.post("/users", (req,res)=>{
    res.status(201).send("Create users");
})

app.listen(PORT,()=>{
    console.log(chalk.bgRed.bold(`Server is running at http://localhost:${PORT}`));
});