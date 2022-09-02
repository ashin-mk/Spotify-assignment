const mongoose=require("mongoose")
const addArtists=mongoose.Schema({
    Artist:String,
DOB:String,
Bio:String,
Songs:Array
})
const Artists=mongoose.model("artists",addArtists)
module.exports=Artists