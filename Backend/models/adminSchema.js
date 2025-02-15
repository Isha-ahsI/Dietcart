import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true 
        },
        price:{
            type:Number,
            required:true 
        }
    }
);

export const AdminSchema = mongoose.model('Admin',adminSchema);