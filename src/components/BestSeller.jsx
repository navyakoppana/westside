import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import './BestSeller.css'


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const[bestSeller,setBestSeller] = useState([]);

    useEffect(() =>{
        setBestSeller(products.filter((item)=>(item.bestseller)));
    },[products])
    return (
    <div>
        <div className='bestseller-heading'>
            <h2>BEST SELLERS</h2>
        </div>
        <div>
            {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>
    </div>
    
  )
}

export default BestSeller;