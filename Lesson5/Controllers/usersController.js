const path = require("path");
const users = require("../Models/usersModel");

exports.getUsers = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../Views/index.html"));
};

exports.saveUsers = (req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name,
        age
    }
    users.push(user)
    res.status(201).json({
        success: true,
        users
    });
}





