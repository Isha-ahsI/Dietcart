
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "https://dietcart-3.onrender.com";
  console.log(req);   

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100   // ✅ Corrected
      },
      quantity: item.quantity,
    }));

    // Add delivery charge
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200, 
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // ✅ Required field
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    console.log("Stripe Session:", session);
    res.json({ success: true, session_url: session.url }); // ✅ Fixed typo

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error processing payment" });
  }
};

const verifyOrder = async(req,res)=>{
  const{orderId,success}=req.body;
  try {
    if (success=='true') {
      await orderModel.findByIdAndUpdate(orderId,{payment:true});
      res.json({success:true,message:"Paid"})
    }
    else{
      await orderModel.findByIdAndDelete(orderId);
      res.json({success:false,message:"Not Paid"})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

const userOrders=async(req,res)=>{
    try {
      const order=await orderModel.find({userId:req.body.userId});
      res.json({success:true,data:order})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
    }
}


const listOrders =async(req,res) =>{
  try {
    const order=await orderModel.find({});
    res.json({success:true,data:order})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

const updateStatus=async(req,res)=>{
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status Updated"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating status" });
  }
}

export { placeOrder , verifyOrder, userOrders,listOrders,updateStatus};
