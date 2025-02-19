import React from 'react'
import  home_picture from '../assets/home_picture.png'
import home_picture_2 from '../assets/home_picture_2.png'
import './Homecontent.css'
import {useNavigate } from'react-router-dom'
const Homeconent = () => {

  const navigate = useNavigate()

  const handleShopNowClick = () =>{
    navigate('/collection')
  }
  return (
    <div className='home-page'>
      <div className='home-page-left'>
          <img src={home_picture_2} alt=""/>
        </div>
        <div className='home-page-center'>
           <div className='content'>
            <p>Unwind</p>
            <p>In </p>
            <p>Style</p>
           </div>
           <button onClick ={handleShopNowClick} className="btn">
             Shop Now    
           </button>
        </div>
      <div className="home-page-right">
        <img src={home_picture} alt=""/>
      </div>
    </div>
  )
}

export default Homeconent