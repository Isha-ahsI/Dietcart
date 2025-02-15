import express from 'express';
import {AdminSchema} from '../models/adminSchema.js'



const router= express.Router();

router.post("/", async (res,req) => {
    try {
        if(
            !req.body.name ||
            !req.body. description ||
            !req.body.category ||
            !req.body.price 
        ){
            return res.status(400).send({
                message:'send all required fields',
            });
        }
        const newAdmin ={
            name:req.body.name,
            description:req.body. description,
            category:req.body.category,
            price:req.body.price 
        };
        const admin=await AdminSchema.create(newAdmin);

        return res.status(201).send(admin);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

export default router;