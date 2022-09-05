const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require("cors")
const user = require('./Routes/Userdetails')
const songNartist=require("./Routes/songNartist")
require("dotenv").config()

//body parser middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:"30mb",extended:true}))
app.use(cors())

app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Server is running")
    }else{
        console.log("Err running server")
    }
})
mongoose.connect("mongodb+srv://Ashindeedu:ashin123@ashinmk.rxye7.mongodb.net/Spotify?retryWrites=true&w=majority",()=>{
console.log("connected to db")
},()=>{
console.log("Err connecting to db")
})


// middlewares
app.use("/",user)
app.use("/",songNartist)
