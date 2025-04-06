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
                <p>At DietCart, we believe that eating well shouldn't be complicated. Our mission is to make nutritious choices easy and accessible for everyone. Whether you're looking to lose weight, maintain a balanced diet, or simply explore healthier meal options, DietCart offers a wide range of curated diet plans, fresh ingredients, and ready-to-eat meals tailored to your lifestyle. Join us on a journey to better health with delicious food delivered right to your doorstep – because wellness starts with what’s on your plate.</p>
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
                    <li>Category</li>
                    <li>Blog</li>
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
