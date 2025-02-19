import React from 'react'
import styled from 'styled-components';
import './NewsLetterBox.css'
import Title from './Title';

const StyledButton =styled.button`
        border:2px solid;
        background-color:black;
        color:white;
        padding:15px 32px;
        text-align:center;
        display:inline-block;
        font-size:10px;
        cursor:pointer;
        &:hover{
            background-color:red;
        }
        @media(max-width:768px){
            padding:10px 20px;
            font-sixe:8px;
        }
    `


const NewsLetterBox = () => {

    const onSubmitHandler =(event) => {
        event.preventDefault();
    }

    
  return (
    <div>
        <div>
        <Title text1='Join our' text2='newsletter'></Title>
        </div>
        <div className='newsletter'>
            <p className='newsletter-info'>Get the latest updates from store</p>  
            <div>
                <form onSubmit={onSubmitHandler} className='newsletter-form'>
                    <input type='email' placeholder='Email ID'/>
                    <StyledButton type='submit'>SUBSCRIBE</StyledButton>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsLetterBox