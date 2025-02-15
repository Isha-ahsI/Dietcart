// import express from "express"
// import { User } from "../models/user.js";

// const router = express.Router();

// //Route for insert a new record
// router.post("/", async (req,res)=>{
//     try {

//         if(!req.body.userId || !req.body.username || !req.body.password || !req.body.cPassword || !req.body.email){
//             return res.status(400).send({message: "successfully register",});
//         }
//         const newUser ={
//             userId : req.body.userId,
//             username : req.body.username,
//             password : req.body.password,
//             cPassword : req.body.cPassword,
//             email : req.body.email
//         };
//         const user = await User.create(newUser);
//         return res.status(201).send(user);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({message: error.message});
//     }
// });


// //Routefor get all records from database

// router.get('/',async(req,res)=>{
//     try{
//         const user = await User.find({});
//         return res.status(200).json({
//             count:user.length,
//             data:user
//         });
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//     }
// });


// // //Routefor get one records from database

// // router.get('/:id',async(req,res)=>{
// //     try{
// //         const {id} = req.params;
// //         const user = await User.findById(id);
// //         return res.status(200).json(user);
// //     }
// //     catch(error){
// //         console.log(error.message);
// //         res.status(500).send({message: error.message})
// //     }
// // });


// // //Route for update record

// router.put('/:id',async(req,res)=>{
//     try{
//       if(!req.body.userId || !req.body.username || !req.body.password || !req.body.cPassword || !req.body.email){
//         return res.status(400).send({
//             message:'send all required fields.'
//         });
//       } 

//       const{ id } = req.params;

//       const result =await User.findByIdAndUpdate(id,req.body);
//       if (!result){
//         return res.status(404).json({message:'User Not Found'})
//       }
//       return res.status(200).send({message:"User Detail Update Successfully"})

//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//     }
// });


// // //Router for delete record

// // // router.delete('/:id',async(req,res)=>{
// // //     try {
// // //         const{ id } = req.params;
// // //         const result=await User.findByIdAndDelete(id);

// // //         if (!result){
// // //             return res.status(404).json({message:'User Not Found'})
// // //           }
// // //           return res.status(200).send({message:"User Detail Delete Successfully"})
    
// // //     } catch (error) {
// // //         console.log(error.message);
// // //         res.status(500).send({message: error.message})
// // //     }
// // // });

// export default router;