import express from "express";
import  { Admin } from "../models/Admin.js";


const router = express.Router();

router.post("/", async (req,res)=>{
    try {

        if(!req.body.addimage || !req.body.additemname || !req.body.adddescription || !req.body.addprice || !req.body.addcategory){
            return res.status(400).send({message: "successfully register"});
        }
        const newAdmin ={
            addimage : req.body.addimage,
            additemname : req.body.additemname,
            adddescription : req.body.adddescription,
            addprice : req.body.addprice,
            addcategory : req.body.addcategory
        };
        const admin = await Admin.create(newAdmin);
        return res.status(201).send(admin);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//Router for delete record
router.delete('/:id',async(req,res)=>{
        try {
            const{ id } = req.params;
            const result=await Admin.findByIdAndDelete(id);
    
            if (!result){
                return res.status(404).json({message:'Item Not Found'})
              }
              return res.status(200).send({message:"Item Detail Delete Successfully"})
        
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message: error.message})
        }
    });

export default router;



