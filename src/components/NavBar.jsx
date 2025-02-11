import React from 'react'
import logo from '../assets/logo.png'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import Search from '../pages/Search'
import menu from '../assets/menu_icon.png'
import back from '../assets/left_arrow.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'




const NavBar = () => {
    const[visible,setVisible]=useState(false);
    const {getCartCount}=useContext(ShopContext);
    

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <ul className="nav-menu">
            <NavLink to='/'>HOME</NavLink>
            {/* <div className="dropdown"> */}
            <NavLink to='/collection'>COLLECTION</NavLink>
                {/* <ul className="dropdown-menu"> 
                    <NavLink to='/collection/men'>Men</NavLink>
                    <NavLink to='/collection/women'>Women</NavLink>
                    <NavLink to='/collection/boys'>Boys</NavLink>
                    <NavLink to='/collection/girls'>Girls</NavLink>
                </ul>
            </div> */}
            <NavLink to ='/about'>ABOUT</NavLink>
            <NavLink to ='/contact'>CONTACT</NavLink>
        </ul>
        <div className='nav-all-screen-items'>
            <div className="nav-search"><Search>""</Search></div>
            <div className="nav-login-cart">
                <NavLink to ='/login'>LOGIN</NavLink> 
                <NavLink to ='/cart'>
                    <img src={assets.cart_icon}  alt=""/>
                </NavLink>
                <div className="nav-cart-count">{getCartCount()}</div>
            </div>
            <div className='nav-menu-icon'>
                <img onClick = {()=>setVisible(true)}src={menu} alt="" />
            </div>
        </div> 
        {visible && (
          <div className="sidebar">
            <div className="nav-back" onClick={() => setVisible(false)}>
                <img  src={back} alt="" />
                <p>Back</p>
            </div>
            <NavLink to="/" onClick={() => setVisible(false)}>HOME</NavLink>
            {/* <div className="dropdown-side"onClick ={() =>setSideDropdownVisible(true)}> */}
            <NavLink to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
            {/* <span>COLLECTION</span> */}
                {/* {sideDropdownVisible && (
                 <div className="dropdown-side-menu"> 
                        <NavLink to='/collection/men'  onClick={() => setVisible(false)}>Men</NavLink>
                        <NavLink to='/collection/women'  onClick={() => setVisible(false)}>Women</NavLink>
                        <NavLink to='/collection/boys'  onClick={() => setVisible(false)}>Boys</NavLink>
                        <NavLink to='/collection/girls'  onClick={() => setVisible(false)}>Girls</NavLink>
                 </div>)} */}
            {/* </div> */}
            <NavLink to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
          </div> )}
    </div>
  )
}

export default NavBar