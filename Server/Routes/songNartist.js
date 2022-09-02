const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const Artist=require("../models/Artistschema")
const Songs=require("../models/NewsongSchema")


// creating a new song with unique id
router.post("/addsongs",async(req,res)=>{
const availableSongs= await Songs.find()
const exist=await Songs.find({Artist:req.body.Artist,Song:req.body.Song})
if(exist.length){
    res.status(400).send("Song is there with same artist")
}else{
    const uniqueId=`${10001+availableSongs.length}`
    console.log(uniqueId)
    await Songs.create({
        Song:req.body.Song,
        Image:req.body.Image,
        Released:req.body.Released,
        Artist:req.body.Artist,
        UniqueId:uniqueId,
    })
    
const newSongs=await Artist.find({Artist:req.body.Artist})
    newSongs[0].Songs.push(req.body.Song)
    await Artist.updateOne({Artist:req.body.Artist},{Songs:newSongs[0].Songs})
    res.status(200).send(" song created Successfully")
}

})

// home fetcing available songs
router.get("/home",async(req,res)=>{
    const songcollections=await Songs.find()
    const availableartist=await Artist.find()
    res.status(200).send({
        Song:songcollections,
        Artist:availableartist
    })
})

//creating a new artists

router.post("/addartists",async(req,res)=>{
    const existingartists=await Artist.find({Artist:req.body.Artist})
    if(existingartists.length){
        res.status(400).send("artist already exist")
    }else{
       const newartist=await Artist.create({
        Artist:req.body.Artist,
DOB:req.body.DOB,
Bio:req.body.Bio,
Songs:[]
       })
       res.status(200).send({Artist:newartist})
    }
})

module.exports=router