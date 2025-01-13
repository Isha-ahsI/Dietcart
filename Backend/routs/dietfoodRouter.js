import express from "express";
import  {Dietfood} from "../models/dietfood.js";


const router = express.Router();


//Route for insert a new record

router.post("/", async (req,res)=>{
    try {

        if(!req.body.dishname || !req.body. description || !req.body.dishprice || !req.body.image || !req.body.category){
            return res.status(400).send({message: "successfully register"});
        }
        const newDietfood ={
            dishname : req.body.dishname,
            description : req.body.description,
            dishprice : req.body.dishprice,
            image : req.body.image,
            category : req.body.category
        };
        const dietfood = await Dietfood.create(newDietfood);
        return res.status(201).send(dietfood);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});


//Routefor get one records from database

router.get('/:id',async(req,res)=>{
        try{
            const {id} = req.params;
            const dietfoods = await Dietfood.findById(id);
            return res.status(200).json(dietfoods);
        }
        catch(error){
            console.log(error.message);
            res.status(500).send({message: error.message})
        }
    });


    //Routefor get all records from database

router.get('/',async(req,res)=>{
    try{
        const dietfoods = await Dietfood.find({});
        return res.status(200).json({
            count:dietfoods.length,
            data:dietfoods
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});


// //Route for update record

router.put('/:id',async(req,res)=>{
    try{
        if(!req.body.dishname || !req.body. description || !req.body.dishprice || !req.body.image || !req.body.category){
        return res.status(400).send({
            message:'send all required fields.'
        });
      } 

      const{ id } = req.params;

      const result =await Dietfood.findByIdAndUpdate(id,req.body);
      if (!result){
        return res.status(404).json({message:'Dish Not Found'})
      }
      return res.status(200).send({message:"Dish Detail Update Successfully"})

    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});


//Router for delete record

router.delete('/:id',async(req,res)=>{
        try {
            const{ id } = req.params;
            const result=await Dietfood.findByIdAndDelete(id);
    
            if (!result){
                return res.status(404).json({message:'Dish Not Found'})
              }
              return res.status(200).send({message:"Dish Detail Delete Successfully"})
        
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message: error.message})
        }
    });

export default router;

