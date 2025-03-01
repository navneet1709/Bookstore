// const express = require("express")
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"

const app = express()


app.use(cors())
app.use(express.json())

dotenv.config();


const PORT = process.env.PORT; 
const MONGODB_URI = process.env.MONGODB_URI

//connect to mongodb
try {
    mongoose.connect(MONGODB_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    console.log("connected to mongoDB")
} catch (error) {
    console.log("Error", error)
}

// defining routes

app.use("/book",bookRoute)
app.use('/user',userRoute)

app.get("/",(req,res)=>{
    res.send("Hello World!")
})







app.listen(PORT,()=>{
    console.log("server is running at port : ",PORT)
})

