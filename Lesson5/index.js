const express = require("express");
const userRouter = require("./Routes/UsersRoute");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
app.use(userRouter);

app.use((req, res, next)=>{
    res.status(404).json({
        message:"Resource not found"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})