//Pakages Require
require('dotenv').config()
const express = require('express');
const cors =  require('cors');
const authRoutes = require("./routes/auth.js")

const app = express();
const PORT = process.env.PORT || 5000

//MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
app.use("/auth", authRoutes)

//Routes
app.get("/",(req,res)=>{
    res.send("Hello Hacker!")
});

app.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})