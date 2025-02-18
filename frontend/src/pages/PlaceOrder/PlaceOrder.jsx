import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalMenuAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
        <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
            </div>
            <input type='email' placeholder='Email address' />
            <input type='text' placeholder='Street' />
            <div className='multi-fields'>
                <input type='text' placeholder='City' />
                <input type='text' placeholder='State' />
            </div>
            <div className='multi-fields'>
                <input type='text' placeholder='Zip code' />
                <input type='text' placeholder='Country' />
            </div>
            <input type='text' placeholder='Phone' />
        </div>
        <div className='place-order-right'>
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
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder
