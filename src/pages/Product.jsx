import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import {
  ProductContainer,
  HeadingContainer,
  ProductWrapper,
  ImageSection,
  ThumbnailContainer,
  Thumbnail,
  MainImage,
  InfoSection,
  Title,
  Price,
  Description,
  SizeSelector,
  SizeButtons,
  SizeButton,
  AddToCartButton,
  Hr,
  ShippingInfo,
  ShippingItem,
  Finaldiv
} from '../components/Product_Styles.jsx'
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');
 
  const fetchProductData = () =>{

    products.map((item) =>{
      if(item._id===productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() =>{
    fetchProductData();
  },[productId,products])


return productData ? (
  <ProductContainer>
    <HeadingContainer>
      COLLECTIONS / {productData.category.toUpperCase()} / {productData.subCategory.toUpperCase()}
    </HeadingContainer>
    {/*------------------ Product Data ------------------------*/}
    <ProductWrapper>
      {/*---------------- Product Image -----------------------*/}
      <ImageSection>
        <ThumbnailContainer>
          {productData.image.map((item, index) => (
            <Thumbnail key={index} onClick={() => setImage(item)} src={item} alt="" />
          ))}
        </ThumbnailContainer>
        <MainImage src={image} alt="" />
      </ImageSection>
      {/*----------------------Product Info------------------------ */}
      <InfoSection>
        <Title>{productData.name}</Title>
        <Price>{currency}{productData.price}</Price>
        <Description>{productData.description}</Description>
        <SizeSelector>
          <p>Select Size:</p>
          <SizeButtons>
            {productData.sizes.map((item, index) => (
              <SizeButton key={index} isActive={size ===item} onClick={() => setSize(item)}>{item}</SizeButton>
            ))}
          </SizeButtons>
        </SizeSelector>
        <AddToCartButton onClick={() =>addToCart(productData._id,size)}>ADD TO CART</AddToCartButton>
        <Hr />
        <ShippingInfo>
          <ShippingItem>
            <img src={assets.shipping_icon} alt="" />
            <p>Free Shipping on orders above $100</p>
          </ShippingItem>
          <ShippingItem>
            <img src={assets.exchange_icon} alt="" />
            <p>Easy returns</p>
          </ShippingItem>
          <ShippingItem>
            <img src={assets.freshfashion_icon} alt="" />
            <p  style={{ whiteSpace: "nowrap" }}>Fresh Fashion</p>
          </ShippingItem>
        </ShippingInfo>
      </InfoSection>  
    </ProductWrapper>
    <RelatedProducts category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
  </ProductContainer>
) : (
  <Finaldiv></Finaldiv>
);
}
export default Product