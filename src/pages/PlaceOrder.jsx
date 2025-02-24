import React from 'react'
import { useState,useContext,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate,useLocation } from 'react-router-dom';
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import {MainForm,LeftDiv,HeadingDiv,NameDiv,Address,AddressSubDiv,Phone,RightDiv,PaymentDiv,Dot,SelectPaymentDiv,PlaceOrderButton} from '../components/Placeorder_styles';
import { CartInfoDiv, ImageDiv, DescriptionDiv, SubDiv, Input } from '../components/Cart_styles';




const PlaceOrder = () => {

  const [method,setMethod]=useState('cod');
  const navigate=useNavigate();
  const { state } = useLocation(); // Get state from location
  const {products,currency,updateQuantity}=useContext(ShopContext);
  const cartData = state?.cartData || [];

  const [isSmall, setIsSmall] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handlePlaceOrder =(e) =>{
    e.preventDefault();
    navigate('/orders', { state: {cartData} });
  }


  return (
    <div>
      <MainForm onSubmit={handlePlaceOrder}>
      {/*------------- Left Side ---------------*/}
        <LeftDiv>
          <HeadingDiv>
            <p>DELIVERY INFORMATION</p>
          </HeadingDiv>
            <NameDiv>
              <input type='text' placeholder='First name' required />
              <input type='text' placeholder='Last name'  required />
            </NameDiv>
            <Address type='email' placeholder='Email Address'required />
            <Address type='text' placeholder= 'Street' required />
            <AddressSubDiv>
            <input type='text' placeholder='City'required />
            <input type='text' placeholder='State' required />
            </AddressSubDiv>
            <AddressSubDiv>
              <input type='text' placeholder='Country' required />
              <input type='text' placeholder='Zipcode' required />
            </AddressSubDiv>
            <Phone type='number' placeholder='Phone number' required />
            
            {/*------------- Cart Items from Cart.jsx ---------------*/}
            {cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);
                if (!productData) {
                    return null; // Skip if productData is undefined
                }
               return(
                <CartInfoDiv style={{ borderBottom:'none',boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.1)',width:isSmall?'90%':'50%',justifyContent:'space-between'}}  key={index}>
                    <SubDiv >
                        <div>
                            <ImageDiv src={productData.image[0]} alt="" />
                        </div>
                        <DescriptionDiv style={{fontSize:isSmall?'14px':'18px',marginRight:'150px'}}>
                            <p style={{width:'200px'}}>{productData.name}</p>
                            <div>
                                <p>{currency}{productData.price}</p>
                                <p>Size: {item.size}</p>
                            </div>
                        </DescriptionDiv>
                    </SubDiv>
                    <Input onChange={(e)=>updateQuantity(item._id,item.size,Number(e.target.value))}type="number" min={0} defaultValue={item.quantity}/>
                </CartInfoDiv>
            )})}
        </LeftDiv>
        {/* -----------------Right Side--------------- */}
        <RightDiv>
          <div>
            <CartTotal/>
          </div>
          <PaymentDiv>
            <p>PAYMENT METHOD</p>
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