import React,{useContext, useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("home");

  const {getTotalMenuAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate()


  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("category")} className={menu==="category"?"active":""}>Category</a>  
        {/* <a href='#blog' onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</a> */}
        <Link to='/Blog'onClick={()=>setMenu("Blog")} className={menu==="Blog"?"active":""}>Blog</Link>
        
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/menu'><img src={assets.add_to_cart} alt="" /></Link>
          <div className={getTotalMenuAmount()===0?"":"dot"}></div>
        </div>
        
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt=''/>
          <ul className="nav-profile-dropdown">
            {/* <li><img src={assets.shopping_bag} alt=''/><p>Orders</p></li>
            <hr/> */}
            <li className='logout' onClick={logout}><img src={assets.logout} alt=''/><p>LogOut</p></li>
          </ul>
          </div>
          }
        
      </div>
    </div>
  )
}

export default Navbar