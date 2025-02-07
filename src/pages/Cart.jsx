import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { MainDiv,HeadingDiv,CartInfoDiv,ImageDiv,DescriptionDiv,SubDiv,Input,CartTotalDiv,CheckoutDiv,CheckoutButton} from '../components/Cart_styles'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'



const Cart = () => {

  const {products,currency,cartItems,updateQuantity,setCartItems,navigate}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);
  

  useEffect(() =>{
    const tempData = [];
    for (const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);  
  },[cartItems])
 

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }  
  return (
    <MainDiv >
      <HeadingDiv>
        <h2>YOUR CART</h2>
      </HeadingDiv>

      <form onSubmit = {handleSubmit}>
        {
          cartData.map((item,index) =>{
            const productData = products.find((product)=>product._id===item._id);
            return(
              <CartInfoDiv key={index} >
                <SubDiv>
                  <div>
                  <ImageDiv src={productData.image[0]} alt="" />
                  </div>
                  <DescriptionDiv>
                    <p>{productData.name}</p>
                    <div>
                      <p>{currency}{productData.price}</p>
                      <p>Size:{item.size}</p>
                    </div>
                  </DescriptionDiv>

                </SubDiv>
                <Input onChange={(e)=>updateQuantity(item._id,item.size,Number(e.target.value))}type="number" min={1} defaultValue={item.quantity}/>
                <img onClick={() => updateQuantity(item._id,item.size,0)} src={assets.bin_icon} alt="" />
              </CartInfoDiv>
            )
          })
        }
      </form>
      <div>
        <div>
          <CartTotalDiv>
            <CartTotal/>
          </CartTotalDiv>
          <CheckoutDiv>
            <CheckoutButton onClick={() =>navigate('/place-order',{state:{ cartData }})}>PROCEED TO CHECKOUT</CheckoutButton>
          </CheckoutDiv>
        </div>
      </div>
      <Footer/>
    </MainDiv>
  )
}

export default Cart