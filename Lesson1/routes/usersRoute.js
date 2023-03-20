// Routing
const express = require("express");
const router = express.Router();


router.get("/about",(req,res)=>{
    res.send("<h1>Get request at about route</h1>");
});

router.get("/contact",(req,res)=>{
    res.send("<h1>Get request at contact route</h1>");
});

module.exports = router;