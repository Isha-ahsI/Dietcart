import React, { useContext } from 'react'
import './Menu.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Menu = () => {

  const {cartItems,food_list,removeFromCart,getTotalMenuAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='menu'>
      <div className="menu-items">
        <div className="menu-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
                <div className='menu-items-title menu-items-item'>
                  <img src={url+"/image/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} ₹</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]} ₹</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div> 
      <div className="menu-bottom">
          <div className="menu-total">
              <h2>Cart Totals</h2>
              <div>
                  <div className="menu-total-details">
                    <p>Subtotal</p>
                    <p>{getTotalMenuAmount()} ₹</p>
                  </div>
                  <hr />

                  <div className="menu-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalMenuAmount()===0?0:50} ₹</p>
                  </div>
                  <hr />

                  <div className="menu-total-details">
                    <b>Total</b>
                    <b>{getTotalMenuAmount()===0?0:getTotalMenuAmount()+50} ₹</b>
                  </div>
              </div>
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="menu-promocode">
              <div>
                  <p>If you have a promo code, Enter it here.</p>
                  <div className="menu-promocode-input">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                  </div>
              </div>
          </div>  
      </div> 
    </div>
  )
}

export default Menu
