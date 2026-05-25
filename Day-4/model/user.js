const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true, 
        unique:true,  
        trim:true, 
        validator(value){  
            if(!validator.isEmail(value)){  
                throw new Error("Invalid Email"); 
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isStrongPassword(value)){ 
                throw new Error("Please Enter strong password");
            }
        }
    }
})

module.exports=mongoose.model("User",userSchema); 




