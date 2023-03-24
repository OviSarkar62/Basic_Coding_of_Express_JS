 let users = require("../Models/usersModel");
const{v4:uuidv4} = require("uuid");

// Get Users
const getAllUsers = (req,res)=>{
    res.status(200).json({users});
}

// Create Users
const createUsers = (req,res)=>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    }
    users.push(newUser);
    res.status(200).json(users);
}

// Update Users
const updateUsers = (req,res)=>{
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter((user)=> user.id===userId).map((selectedUser)=>{
    selectedUser.username = username;
    selectedUser.email = email;
    })
    res.status(200).json(users);
}

// Delete Users
const deleteUsers = (req,res)=>{
    const userId = req.params.id;
    users = users.filter((user)=> user.id!== userId);
    res.status(200).json(users);
}

module.exports = {getAllUsers, createUsers, updateUsers, deleteUsers}