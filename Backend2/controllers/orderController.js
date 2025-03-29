// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Instamojo from 'instamojo-nodejs';


// const instamojo=Instamojo.setKeys(process.env.INSTAMOJO_API_KEY);

// //placing user order for frontend
// const placeOrder=async(req,res) =>{

//     const frontend_url="http://localhost:5173"

// try {
//     const newOrder= new orderModel({
//         userId:req.body.userId,
//         items:req.body.items,
//         amount:req.body.amount,
//         address:req.body.address
//     })
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//     const line_items=req.body.items.map((item)=>({
//         price_data:{
//             currency:"INR",
//             product_data:{
//                 name:item.name
//             },
//             unit_amount:item.price*100*86
//         },
//         quantity:item.quantity
//     }))

//     line_items.push({
//         price_data:{
//             currency:"INR",
//             product_data:{
//                 name:"Delivery Charges"
//             },
//             unit_amount:2*100*86,
//         },
//         quantity:1
//     })

//     const session =await instamojo.Checkout.session.create({
//         line_items:line_items,
//         mode:'payment',
//         success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//         cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     })

//     res.json({success:true,seseion_url:session.url})

// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// export {placeOrder};

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import axios from "axios";

const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Creating the Instamojo Payment Request
        const payload = {
            purpose: "Diet Cart Order Payment",
            amount: req.body.amount,
            buyer_name: req.body.buyerName,
            email: req.body.email,
            phone: req.body.phone || "9999999999", // Default phone number if not provided
            redirect_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            webhook: "http://your-backend-url/webhook", // Optional: Handle Instamojo response
            send_email: true,
            send_sms: true,
            allow_repeated_payments: false,
        };

        const headers = {
            "X-Api-Key": process.env.INSTAMOJO_API_KEY,
            "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN,
        };

        const response = await axios.post("https://test.instamojo.com/api/1.1/payment-requests/", payload, { headers });

        if (response.data.success) {
            res.json({ success: true, session_url: response.data.payment_request.longurl });
        } else {
            res.json({ success: false, message: "Failed to create payment request" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error processing order" });
    }
};

const userOrders =async(req,res)=>{

}

export { placeOrder,userOrders };
