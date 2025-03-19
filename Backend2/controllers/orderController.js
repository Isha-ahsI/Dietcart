import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Instamojo from 'instamojo-nodejs';
import dotenv from 'dotenv';
import Stripe from "stripe";
dotenv.config();

const instamojo=Instamojo.setKeys(process.env.INSTAMOJO_SECRET_KEY, process.env.INSTAMOJO_SECRET_TOKEN);

//placing user order for frontend
const placeOrder=async(req,res) =>{

    const frontend_url="http://localhost:5173"

try {
    const newOrder= new orderModel({
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

    const line_items=req.body.items.map((item)=>({
        price_data:{
            currency:"INR",
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100*86
        },
        quantity:item.quantity
    }))

    line_items.push({
        price_data:{
            currency:"INR",
            product_data:{
                name:"Delivery Charges"
            },
            unit_amount:2*100*86,
        },
        quantity:1
    })

    const session =await Stripe.Checkout.session.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    })

    res.json({success:true,seseion_url:session.url})

} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

export {placeOrder};

