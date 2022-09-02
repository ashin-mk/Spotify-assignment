const mongoose=require("mongoose")
 const Userschema= mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
})
const Users=mongoose.model("users",Userschema)
module.exports=Users