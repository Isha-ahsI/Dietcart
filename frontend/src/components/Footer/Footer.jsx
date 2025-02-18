import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <div className='footer-content-left-logo'>
                    <img src={assets.logo} alt="" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim recusandae culpa, eos labore voluptatem reiciendis excepturi repudiandae sequi at laborum incidunt officia, consequatur fugiat vitae nihil sapiente voluptates magni eveniet.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.whatsapp_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Dietcart</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 88660 88990</li>
                    <li>info.dietcart@gmail.com</li>
                </ul>
            </div>
        </div> 
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © Dietcart.com - All right Reserved.</p> 
    </div>
  )
}

export default Footer
