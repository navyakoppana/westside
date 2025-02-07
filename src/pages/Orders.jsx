import React from 'react'
import { useContext,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import styled from 'styled-components'

const OrderInfoDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
`
const HeadingDiv =styled.div`
    font-size:25px;
    color:black;
`
const SubDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-grow: 1; /* Allow SubDiv to take available space */
`
const Image = styled.img`
    width:120px;
    height:120px;
    border:2px solid #000;
    gap:30px;
`
const DescriptionDiv = styled.div`
    margin-left:40px;
    font-size:16px;
    font-weight:bold;
`
const DescriptionSubDiv = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`
const Dot = styled.p`
    width:10px;
    height:10px;
    border: 1px solid #000; 
    border-radius: 50%; 
    margin-right: 10px;
    background-color:green;
`
const ShipDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-right:50%;
    @media(max-width:768px){
      margin-right:20%;
      margin-left:10%;
    }
`

const Orders = () => {
  const {products,currency}=useContext(ShopContext);
  const location = useLocation();
  // const navigate=useNavigate();
  
  // useEffect(() => {
  //   if (!location.state) {
  //     navigate('/cart');
  //   }
  // }, [location.state, navigate]);

  const state = location.state || {};
  const cartData = state.cartData || [];

 
  return (
    <div>
      <HeadingDiv>
        <h2>MY ORDERS</h2>
      </HeadingDiv>
      <div>
        {
          cartData.map((item,index) =>{
            const productData = products.find((product) => product._id === item._id);
            return(
              <OrderInfoDiv key={index}>
                <SubDiv>
                  <Image src={productData.image[0]} alt=""/>
                  <DescriptionDiv>
                    <p>{productData.name}</p>
                    <DescriptionSubDiv>
                      <p>{currency}{productData.price}</p>
                      <p>Quantity:{item.quantity}</p>
                      <p>Size:{item.size}</p>
                    </DescriptionSubDiv>
                    <p>Date:<span>{new Date().toLocaleDateString()}</span></p>
                  </DescriptionDiv>
                </SubDiv>
                <ShipDiv>
                  <Dot/>
                  <p>Order Placed</p>
                </ShipDiv>
                <button>Track Order</button>
              </OrderInfoDiv>
            )
        })}
      </div>

    </div>
  )
}

export default Orders