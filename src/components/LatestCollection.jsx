import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';
import styled from 'styled-components';

const StyledDiv = styled.div`
    @media(max-width:768px){
        margin-top:-300px;
    }
`

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
      console.log('Products in useEffect:', products); // Log products here
      if (products && products.length > 0) {
          setLatestProducts(products.slice(2,6))
      }
  }, [products]);

  console.log('Latest products:', latestProducts); // Log latestProducts here

  return (
      <div>
        <StyledDiv>
            <Title text1='latest' text2='collections'></Title>
        </StyledDiv>
          {latestProducts.length > 0 ? (
              latestProducts.map((item, index) => (
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))
          ) : (
              <p>No products available</p>
          )}
      </div>
  );
};
export default LatestCollection;