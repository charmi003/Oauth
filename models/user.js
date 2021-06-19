const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    googleId:{
        type:String,
        unique:true
    },
    photo:{
        type:String
    }
}, {
    timestamps:true
})

const User=mongoose.model("User",userSchema);

module.exports=User;