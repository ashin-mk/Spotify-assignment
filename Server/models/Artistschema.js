const mongoose=require("mongoose")
const addArtists=mongoose.Schema({
    Artist:String,
DOB:String,
Bio:String,
Songs:Object,
songlist:[],
Rate:Number
})
const Artists=mongoose.model("artists",addArtists)
module.exports=Artists