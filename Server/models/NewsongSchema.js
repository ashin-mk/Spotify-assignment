const mongoose=require("mongoose")
const Songschema=mongoose.Schema({
    Song:String,
    Image:String,
    Released:String,
    Artist:String,
    UniqueId:String
})
const Songs=mongoose.model("songs",Songschema)
module.exports=Songs