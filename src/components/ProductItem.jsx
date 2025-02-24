import {useContext}from 'react'
import { ShopContext } from '../context/ShopContext'
import './ProductItem.css'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContext)
  return (
    <Link to={`/product/${id}`}>
        <div className='product'>
            <img src={image[0]} alt=""/>
            <div className='product-info'>
                <p>{name}</p>
                <p>{currency}{price}</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductItem