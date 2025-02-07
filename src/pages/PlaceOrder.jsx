import React from 'react'
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import {MainForm,LeftDiv,HeadingDiv,NameDiv,Address,AddressSubDiv1,AddressSubDiv2,Phone,RightDiv,PaymentDiv,Dot,SelectPaymentDiv,PlaceOrderButton} from '../components/Placeorder_styles';




const PlaceOrder = () => {

  const [method,setMethod]=useState('cod');
  const navigate=useNavigate();
  const { state } = useLocation(); // Get state from location

  const handlePlaceOrder =(e) =>{
    e.preventDefault();
    navigate('/orders', { state: { cartData:state.cartData } });
  }


  return (
    <div>
      <MainForm onSubmit={handlePlaceOrder}>
      {/*------------- Left Side ---------------*/}
        <LeftDiv>
          <HeadingDiv>
            <h2>DELIVERY INFORMATION</h2>
          </HeadingDiv>
            <NameDiv>
              <input type='text' placeholder='First name' required />
              <input type='text' placeholder='Last name'  required />
            </NameDiv>
            <Address type='email' placeholder='Email Address'required />
            <Address type='text' placeholder= 'Street' required />
            <AddressSubDiv1>
            <input type='text' placeholder='City'required />
            <input type='text' placeholder='State' required />
            </AddressSubDiv1>
            <AddressSubDiv2>
              <input type='text' placeholder='Country' required />
              <input type='text' placeholder='Zipcode' required />
            </AddressSubDiv2>
            <Phone type='number' placeholder='Phone number' required />
        </LeftDiv>
        {/* -----------------Right Side--------------- */}
        <RightDiv>
          <div>
            <CartTotal/>
          </div>
          <PaymentDiv>
            <h3>PAYMENT METHOD</h3>
            {/* ------------Payment method selection-------- */}
            <div>
              <SelectPaymentDiv  onClick={()=>setMethod('cod')}>
                <Dot isSelected={method==='cod'}/>
                <img src={assets.cards_icon} alt="" />
              </SelectPaymentDiv>
              <SelectPaymentDiv onClick={() =>setMethod('paypal')}>
                <Dot isSelected={method==='paypal'}/>
                <img  src={assets.paypal_icon} alt="" />
              </SelectPaymentDiv>
              <SelectPaymentDiv onClick={() =>setMethod('applepay')}>
                <Dot isSelected={method==='applepay'}/>
                <img  src={assets.applepay_icon} alt="" />
              </SelectPaymentDiv>
            </div>
          </PaymentDiv>
          <div>
            <PlaceOrderButton type='submit'>PLACE ORDER</PlaceOrderButton>
          </div>
        </RightDiv>
      </MainForm>
    </div>
  )
}

export default PlaceOrder