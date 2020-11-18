//import express from "express"
const express = require("express")
const fs = require('fs')
const https = require('https')

const app = express()

// app.get("/", (req, res) => {
//   res.send({
//     location: "23",
//     name: "upi",
//     age: "23"
//   })
// })

// app.get("/", (req, res) => {
//   res.send("oi")
// })

app.use(express.static("public"))

var privateKey = fs.readFileSync('./localhost.key');
var certificate = fs.readFileSync('./localhost.crt');

//I am creating the server this way, bc I needed https for the map to work on my phone. I created a self-signed certificate for localhost and trusted it on my mac.
//Files are not in the repository, you have to create them, or create the server the normal away below and use http
https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(3000, () => {
  console.log("App listening port 3000")
});

// app.listen(3000, () => {
//   console.log("App listening port 3000")
// })