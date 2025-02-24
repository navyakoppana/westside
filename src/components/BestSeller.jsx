import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'





const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    

    useEffect(() => {
        console.log('Products in bestseller:', products); 
        //products.then(res => res.json()).then(products => setBestSeller(products.filter(x => x.bestseller)))
        setBestSeller(products.filter((item)=>(item.bestseller)));
    },[products])
    return (
    <div>
        <div >
            <Title text1='best' text2='sellers'></Title>
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