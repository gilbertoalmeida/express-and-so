//import express from "express"
const express = require("express")

const app = express()

// app.get("/", (req, res) => {
//   res.send({
//     location: "23",
//     name: "upi",
//     age: "23"
//   })
// })

app.use(express.static("public"))

app.listen(3000, () => {
  console.log("App listening port 3000")
})