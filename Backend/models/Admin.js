import mongoose from "mongoose";
 const adminSchema = mongoose.Schema(
    {
      addimage:{
         type:String,
         require:true,
      },
      additemname:{
         type: String,
         require : true,
     },
      adddescription:{
         type:String,
         require : true,
     },
      addprice:{
         type:Number,
         require:true,
     },
     
      addcategory:{
         type:String,
         require:true,
     }   
    }
 )

 export const Admin = mongoose.model('Admin', adminSchema);