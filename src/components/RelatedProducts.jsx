import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import  styled from 'styled-components';
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const Maindiv = styled.div`
    margin-right:950px;

    @media(max-width:768px){
        margin-right:500px; 
    }
    
`

const RelatedProductsDiv = styled.div`
    display:flex;
    width:100%
    height:auto;
`

const RelatedProducts = ({category,subCategory,currentProductId}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(() =>{
        if(products.length>0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category===item.category);
            productsCopy = productsCopy.filter((item)=>subCategory===item.subCategory);
            productsCopy =productsCopy.filter((item)=>currentProductId!==item._id);

            setRelated(productsCopy);

        }
    },[products])
  return (
    <div>
        <Maindiv>
            <h3>RELATED PRODUCTS</h3>
        </Maindiv>
        <RelatedProductsDiv>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
        </RelatedProductsDiv>

    </div>
  )
}

export default RelatedProducts