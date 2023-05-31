const express = require('express')

const connectToDB = require("./config/db")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


connectToDB()

const userRoutes = require("./routes/userRoutes")
app.use("/", userRoutes)

app.get("/", (req,res) => {
  res.send("<h1>WELCOME TO THE FUTURE!</h1>")

})

app.get("/youtube", (req,res) => {
  res.send("RADHA RADHA BHAYA RADHA RADHA!")
})

app.get("/instagram", (req,res) => {
  res.json({
    success: true,
    message: "Do you know"

  })
})

module.exports = app