const express = require("express");
require('dotenv').config()

const PORT = 4000;

const app = express();

app.get("/", (req,res) => {
    res.send("Hello World")
})
app.get("/faceBook", (req,res) => {
    res.send("Welcome to FaceBook")
})
app.get("/youTube", (req,res) => {
    res.send(`<a href="https://www.youtube.com/">Welcome to YouTube</a>`)
})

app.listen(process.env.PORT, () => {
    console.log(`App is listing at PORT NO ${PORT}`);
    
})