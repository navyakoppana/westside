import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { TotalMainDiv,Heading,AmountInfo,Hr} from './CartTotal_Styles'

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <TotalMainDiv>
        <Heading>
            <p>CART TOTALS</p>
        </Heading>
        <AmountInfo>
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </AmountInfo>
        <Hr/>
        <AmountInfo>
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>      
        </AmountInfo>
        <Hr/>
        <AmountInfo>
            <b>Total</b>
            <b>{currency}{getCartAmount()===0?0:getCartAmount()+delivery_fee}.00</b>
        </AmountInfo>
        
    </TotalMainDiv>
  )
}

export default CartTotal