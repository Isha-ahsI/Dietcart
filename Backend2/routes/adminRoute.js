import express from "express"
import { addfood,listFood,removefood, updateFood } from "../controllers/adminController.js"
import multer from "multer"

const adminRouter= express.Router();

//Image storage engine

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }

})

const uploads=multer({storage:storage})

adminRouter.post("/add",uploads.single("image"),addfood)
adminRouter.get("/list",listFood)
adminRouter.post("/remove",removefood);
adminRouter.post("/update", uploads.single("image"),updateFood)


export default adminRouter;
