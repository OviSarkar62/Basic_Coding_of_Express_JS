const{v4:uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username:"Ovi Sarkar",
        email:"ovisarkareceian@gmail.com"
    },
    {
        id: uuidv4(),
        username:"Shuvo Sarkar",
        email:"shuvo@gmail.com"
    },
]

module.exports = users;