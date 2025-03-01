import express from  "express"
import mongoose from "mongoose";
const mongoURL = "mongodb+srv://root:root@cluster.sc6tn.mongodb.net/diet_cart"
// mongodb+srv://root:root@cluster.sc6tn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
import cors from "cors"
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoute.js";
// import 'dotenv,config';
import dotenv from 'dotenvs';

dotenv.config();

const app=express()
const port=4000

app.use(express.json())
app.use(cors())

app.use("/api/food",adminRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

mongoose.connect(mongoURL).then(()=>{
    console.log("mongodb connect");
    app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`);
    });
}).catch((error)=>{
    console.error(error);
});
