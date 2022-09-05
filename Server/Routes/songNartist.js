const express=require("express")
const router=express.Router()
const JWT=require("jsonwebtoken")
const Artists = require("../models/Artistschema")
const Artist=require("../models/Artistschema")
const Songs=require("../models/NewsongSchema")


// creating a new song with unique id
router.post("/addsongs",async(req,res)=>{
    try{
        const email=JWT.verify(req.headers.authtoken,process.env.SECRET_KEY)
        //console.log(email)
        const availableSongs= await Songs.find()
        //console.log(req.body)
        const exist=await Songs.find({Artist:req.body.Artist,Song:req.body.Song})
        
        if(exist.length){
            res.status(400).send("Song is there with same artist")
        }else{
            const uniqueId=`${10001+availableSongs.length}`
             console.log(uniqueId)
            await Songs.create({
                Song:req.body.Song,
                Released:req.body.Released,
                Artist:req.body.Artist,
                UniqueId:uniqueId,
                Rate:0,
                Rating:{
                    [email]:0
                },
                Image:req.body.Image})
            
        const newSongs=await Artist.find({Artist:req.body.Artist})
        //console.log(newSongs)
            newSongs[0].Songs[req.body.Song]=0
            newSongs[0].songlist.push(req.body.Song)
           await Artist.updateOne({Artist:req.body.Artist},{Songs:newSongs[0].Songs,songlist:newSongs[0].songlist})
          //console.log(newSongs[0].Songs)
            res.status(200).send(" song created Successfully")
        }
    }catch{
//console.log("unAuthorized user")
res.status(400).send("Unauthorized user")
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
Songs:{
    emptystartvalue:0
},
songlist:[],
Rate:0
       })
       res.status(200).send({Artist:newartist})
    }
})

//updating rate

router.put("/updaterate",async(req,res)=>{
    try{
        const email=JWT.verify(req.headers.authtoken,process.env.SECRET_KEY)
        const selectedSongs= await Songs.find({UniqueId:req.body.uniqueid})
         const selectedArtist= await Artist.find({Artist:req.body.Artist})
        let rate=0
        let c=0
        selectedSongs[0].Rating[email]=req.body.Rate
        for(k in selectedSongs[0].Rating){
if(k===email){
    rate+=req.body.Rate
    selectedSongs[0].Rating[k]=req.body.Rate
}else{
    rate+=selectedSongs[0].Rating[k]

}
c++

        }
        selectedSongs[0].Rate=(rate/c).toFixed(1)
      await Songs.updateOne({UniqueId:req.body.uniqueid},{Rating:selectedSongs[0].Rating,Rate:selectedSongs[0].Rate})
        c=-1
        rate=0
         selectedArtist[0].Songs[req.body.Song]=req.body.Rate
        // console.log(selectedArtist[0].Songs,selectedSongs[0].Rating)
for(k in selectedArtist[0].Songs){
    if(k===req.body.Song){
        selectedArtist[0].Songs[k]=req.body.Rate
        rate+=req.body.Rate
    }else{
        rate+=selectedArtist[0].Songs[k]
    }

c++
}
selectedArtist[0].Rate=(rate/c).toFixed(1)
//console.log(req.body.Rate,selectedArtist[0].Songs)
        await Artists.updateOne({Artist:req.body.Artist},{Songs:selectedArtist[0].Songs,Rate:selectedArtist[0].Rate})
    }
    catch{
console.log("Unauthorized user")
    }
   
    
})

module.exports=router