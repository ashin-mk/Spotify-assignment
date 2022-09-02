const express=require("express")
const router=express.Router() 
const JWT=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const Users=require("../models/Userschema")
const salt=10

// creating a user
router.post("/signup",async(req,res)=>{
    const userexist= await Users.find({Email:req.body.Email})
    if(userexist.length){
res.status(400).send("Email already Exist")
    }else{
bcrypt.genSalt(salt,(salterr,saltval)=>{
    if(!salterr){
        bcrypt.hash(req.body.Password,saltval,async(hasherr,hashval)=>{
if(salterr){
    res.status(400).send("hasherr")
}else{
   const user= await Users.create({Name:req.body.Name,Email:req.body.Email,Password:hashval})
    res.status(200).send(user)
}
        })
    }else{
        res.status(400).send("salterr")
    }
})
    }
})

// user login

router.post("/login",async(req,res)=>{

    const userdata=await Users.find({Email:req.body.Email})
    // console.log(userdata,req.body)
    if(userdata.length){
const success=await bcrypt.compare(req.body.Password,userdata[0].Password)
// console.log(success)
if(success){
   const token= await JWT.sign(userdata[0].Email,process.env.SECRET_KEY)
   res.status(200).send({authtoken:token})
}else{
    res.status(400).send("Invalid Password")
}
    }else{
        res.status(400).send("Invalid User")
    }
})


module.exports=router