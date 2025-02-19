import React from 'react'
import {assets} from '../assets/assets'
import './OurPolicy.css'
import styled from 'styled-components'
import Title from './Title'


const StyledDiv = styled.div`
  color:navy;
  padding:10px;
  font-size:20px;
  font-weight: bold;
  @media(max-width:768px){
    font-size:18px;
    margin-left:10px;
    
  }
  
`
const StyledLine = styled.p`
    @media(max-width:768px){
        margin-left:20px;
    }
`

const OurPolicy = () => {
  return (
    <div>
        <div className='policy-title'>
            <Title text1='Our' text2='Policy'></Title>
        </div>
        <div className='policy-info'> 
            <div>
                <img src={assets.shipping_icon} alt="" />
                <StyledDiv>Free Shipping </StyledDiv>
                <StyledLine>On orders above $100</StyledLine>
            </div>
            <div>
                <img src={assets.exchange_icon} alt="" />
                <StyledDiv>Easy Returns & Exchange</StyledDiv>
                <StyledLine>Within 30 days</StyledLine>
            </div>
            <div>
                <img src ={assets.customer_support_icon} alt="" />
                <StyledDiv>Best customer support</StyledDiv>
                <StyledLine>We offer 24/7 customer support</StyledLine>   
            </div>
        </div>    
    </div>
  )
}

export default OurPolicy
