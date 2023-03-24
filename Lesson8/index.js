// Uploading Files to server with database
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// User Schema & Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "User name is required"]
    },
    image: {
        type: String,
        required:[true, "User image is required"]
    }
});

const User = mongoose.model("students", userSchema);

//File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "_" + file.originalname;
      cb(null, name)
    }
  })
  
const upload = multer({ storage: storage })

app.get("/register", (req,res)=>{
    res.status(200).sendFile(__dirname+"/Views/index.html")
})

app.post("/register", upload.single("image"), async (req,res)=>{
    try{
        const newUser = new User({
            name: req.body.name,
            image:req.file.filename
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch(error){
        res.status(500).send(error.message);
    }
})

// Connecting to DB
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/school");
        console.log("Database is connected");
    } catch(error){
        console.log("DB is not connected");
        console.log(error);
        process.exit(1);
    }
}

app.listen(PORT, async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
});
