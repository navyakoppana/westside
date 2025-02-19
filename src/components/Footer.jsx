import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledFooterDiv =styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
    justify-content:space-around;
    margin-left:20px;
    @media(max-width:768px){
        margin-left:10px;
    }
`
const StyledHeading=styled.p`
    color:navy;
    text-decoration:underline;
    font-weight:bold;
    font-size:20px;
    @media(max-width:768px){
        font-size:15px;  
    }
`
const StyledList = styled.ul`
    color:black;
    &: hover{
        text-decoration:underline;     
    }
`

const StyledLine = styled.p`
    margin-left:1050px;
    @media(max-width:768px){
        margin-left:200px;
    }
`

const Footer = () => {
    const navigate=useNavigate();
     
  const handleNavigate = (category) => {
    navigate(`/collection?category=${category}`);
  };
  return (
    <div>
        <hr />
        <StyledFooterDiv>
            <div>
                <StyledHeading>SHOP</StyledHeading>
                <StyledList>
                    <li onClick={() =>handleNavigate('Women')}>Women</li>
                    <li onClick={() =>handleNavigate('Men')}>Men</li>
                    <li onClick={() =>handleNavigate('Girls')}>Girls</li>
                    <li onClick={() =>handleNavigate('Boys')}>Boys</li>
                </StyledList>
            </div>
            <div>
                <StyledHeading>COMPANY</StyledHeading>
                <StyledList>
                    <li onClick={() =>navigate('/')}>Home</li>
                    <li onClick={() =>navigate('/about')}>About Us</li>
                    <li onClick={() =>navigate('/login')}>Register</li>
                    <li onClick={() =>navigate('/')}>Policy</li>
                </StyledList>
            </div>
            <div>
                <StyledHeading>CONTACT US</StyledHeading>
                <StyledList>
                    <li>+1-405-456-7890</li>
                    <li>contact@westside.com</li>
                </StyledList>
            </div>
        </StyledFooterDiv>
        <div>
            <hr />
            <StyledLine>Copyright 2024 Westside.-All rights reserved </StyledLine>
        </div>
    </div>
  )
}

export default Footer