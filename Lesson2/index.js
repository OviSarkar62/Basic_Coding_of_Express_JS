// Create express server
const express = require("express");
const app = express();
const PORT = 3000;

// HTTP request with query parameter
app.get("/",(req,res)=>{
    const {id, name} = req.query;
    res.send(`<h1>student id: ${id} and name: ${name}</h1>`);
});

// HTTP request with route parameter
app.get("/userId/:id/userAge/:age",(req,res)=>{
    const id = req.params.id;
    const age = req.params.age;
    res.send(`<h1>student id: ${id} and age: ${age}</h1>`);
});

// HTTP request with header
app.get("/",(req,res)=>{
    const roll = req.header("roll");
    const section = req.header("section");
    res.send(`<h1>student roll: ${roll} and section: ${section}</h1>`);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});