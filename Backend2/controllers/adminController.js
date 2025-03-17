import adminModel from "../models/adminModel.js";
import fs from 'fs'

//add food item

const addfood=async(req,res)=>{

    let image_filename=`${req.file.filename}`;

    const food=new adminModel({

        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"food added successfully!"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }


}

//all food list
const listFood= async(req,res)=>{
    try {
        const foods =await adminModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}



//remove food item
const removefood= async (req,res)=>{
    try {
        const food= await adminModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await adminModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food removed successfully!"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}


//Update food item
const updateFood = async (req, res) => {
    try {
        const food = await adminModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        let image_filename = food.image;
        if (req.file) {
            fs.unlink(`uploads/${food.image}`, () => {});
            image_filename = req.file.filename;
        }

        const updatedFood = await adminModel.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        }, { new: true });

        res.json({ success: true, message: "Food updated successfully!", data: updatedFood });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


export {addfood,listFood,removefood,updateFood}