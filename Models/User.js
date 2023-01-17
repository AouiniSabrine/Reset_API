const mongoose=require("mongoose")

const Schema=mongoose.Schema

//Create the user Schema

const userSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
      required:true
    },
    Password:{
        type:String,
        required:true
    },

    CreationDate: {
        type: Date,
        default: Date.now(),
      },
})
const User=mongoose.model("User",userSchema)
module.exports=User