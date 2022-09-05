const mongoose=require("mongoose")
const Songschema=mongoose.Schema({
    Song:String,
    Image:String,
    Released:String,
    Artist:String,
    UniqueId:{
       type: String,
       required:true},
    Rate:Number,
    Rating:{
        type:Object,
        required:true},
})
const Songs=mongoose.model("songs",Songschema)
module.exports=Songs