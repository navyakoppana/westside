
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { MainDiv,HeadingDiv,CartInfoDiv,ImageDiv,DescriptionDiv,SubDiv,Input,CartTotalDiv,CheckoutDiv,CheckoutButton} from '../components/Cart_styles'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import Title from '../components/Title'

const Cart = () => {

  const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);
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
        <Title text1='Your' text2='Cart'></Title>
      </HeadingDiv>

      <form onSubmit = {handleSubmit}>
          {cartData.map((item,index) =>{
              const productData = products.find((product) => product._id === item._id);
              if (!productData) {
                  return null; // Skip if productData is undefined
              }
              return(
                <CartInfoDiv key={index}  >
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
          })}
      </form>
      <div>
        <div>
          <CartTotalDiv>
            <CartTotal/>
          </CartTotalDiv>
          <CheckoutDiv>
            <CheckoutButton onClick={() =>navigate('/place-order',{state:{ cartData }})}>Proceed to Checkout</CheckoutButton>
          </CheckoutDiv>
        </div>
      </div>
      <Footer/>
    </MainDiv>
  )
}

export default Cart