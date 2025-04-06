import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalMenuAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  getTotalMenuAmount();
  

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phoneno: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder =async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo =item;
        itemInfo =item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)

      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalMenuAmount()+2,
    }
    
    let response=await axios.post(url+"/api/order/",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }

  const navigate =useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/menu')
    }
    else if(getTotalMenuAmount()===0){
      navigate('/menu')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstname" onChange={onchangeHandler} value={data.firstname} type="text" placeholder="First name" required />
          <input name="lastname" onChange={onchangeHandler} value={data.lastname} type="text" placeholder="Last name" required />
        </div>
        <input name="email" onChange={onchangeHandler} value={data.email} type="email" placeholder="Email address" required />
        <input name="street" onChange={onchangeHandler} value={data.street} type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input name="city" onChange={onchangeHandler} value={data.city} type="text" placeholder="City" required />
          <input name="state" onChange={onchangeHandler} value={data.state} type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input name="zipcode" onChange={onchangeHandler} value={data.zipcode} type="text" placeholder="Zip code" required />
          <input name="country" onChange={onchangeHandler} value={data.country} type="text" placeholder="Country" required />
        </div>
        <input name="phoneno" onChange={onchangeHandler} value={data.phoneno} type="text" placeholder="Phone" required />
      </div>

      <div className="place-order-right">
        <div className="menu-total">
          <h2>Cart Totals</h2>
          <div className="menu-total-details">
            <p>Subtotal</p>
            <p>{getTotalMenuAmount()} ₹</p>
          </div>
          <hr />
          <div className="menu-total-details">
            <p>Delivery Fee</p>
            <p>{getTotalMenuAmount() === 0 ? 0 : 2} ₹</p>
          </div>
          <hr />
          <div className="menu-total-details">
            <b>Total</b>
            <b>{getTotalMenuAmount() === 0 ? 0 : getTotalMenuAmount() + 2} ₹</b>
          </div>
          <button type="submit">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
