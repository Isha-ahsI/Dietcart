import React,{useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact us</li>
        <li onClick={()=>setMenu("gallary")} className={menu==="gallary"?"active":""}>Gallary</li>
        <li onClick={()=>setMenu("user profile")} className={menu==="user profile"?"active":""}>User Profile</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.add_to_cart} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
