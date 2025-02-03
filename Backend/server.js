import express, { response } from "express"
import mongoose from "mongoose";
const mongoURL = "mongodb+srv://root:root@cluster.sc6tn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
import { User } from "./models/user.js";
import {Dietfood} from "./models/dietfood.js";
import dietfoodRouter from './routs/dietfoodRouter.js'
import AdminRouter from './routs/AdminRouter.js'
const app = express();


app.use(express.json());


// app.use(cors());

// app.use("/",(req,res)=>{
//     console.log("API working");
// });

//app.use(cors());

//Route for insert a new record
app.post("/user", async (req,res)=>{
    try {

        if(!req.body.userId || !req.body.username || !req.body.password || !req.body.cPassword || !req.body.email){
            return res.status(400).send({message: "successfully register",});
        }
        const newUser ={
            userId : req.body.userId,
            username : req.body.username,
            password : req.body.password,
            cPassword : req.body.cPassword,
            email : req.body.email
        };
        const user = await User.create(newUser);
        return res.status(201).send(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});


//Routefor get all records from database

app.get('/user',async(req,res)=>{
    try{
        const user = await User.find({});
        return res.status(200).json({
            count:user.length,
            data:user
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});


// //Routefor get one records from database

// app.get('/user/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const user = await User.findById(id);
//         return res.status(200).json(user);
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message})
//     }
// });


// //Route for update record

app.put('/user/:id',async(req,res)=>{
    try{
      if(!req.body.userId || !req.body.username || !req.body.password || !req.body.cPassword || !req.body.email){
        return res.status(400).send({
            message:'send all required fields.'
        });
      } 

      const{ id } = req.params;

      const result =await User.findByIdAndUpdate(id,req.body);
      if (!result){
        return res.status(404).json({message:'User Not Found'})
      }
      return res.status(200).send({message:"User Detail Update Successfully"})

    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});


// //Router for delete record

// // app.delete('/user/:id',async(req,res)=>{
// //     try {
// //         const{ id } = req.params;
// //         const result=await User.findByIdAndDelete(id);

// //         if (!result){
// //             return res.status(404).json({message:'User Not Found'})
// //           }
// //           return res.status(200).send({message:"User Detail Delete Successfully"})
    
// //     } catch (error) {
// //         console.log(error.message);
// //         res.status(500).send({message: error.message})
// //     }
// // });

app.use('/dietfood',dietfoodRouter);
app.use('/Admin',AdminRouter);


const port=3001;
mongoose.connect(mongoURL).then(()=>{
    console.log("mongodb connect");
    app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`);
    });
}).catch((error)=>{
    console.error(error);
});
