import mongoose from "mongoose";

const adminschema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true 
    },
    image:{
        type:String,
        required:true 
    },
    category:{
        type:String,
        required:true
    }

})

const adminModel= mongoose.models.admin || mongoose.model("admin",adminschema);

export default adminModel;