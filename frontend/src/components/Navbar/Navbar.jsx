import React,{useContext, useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("home");

  const {getTotalMenuAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("category")} className={menu==="category"?"active":""}>Category</a>  
        <a href='#blog' onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/menu'><img src={assets.add_to_cart} alt="" /></Link>
          <div className={getTotalMenuAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar