import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit:cover;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #000;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit:cover;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-weight:600;
  color:black;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  color:maroon;
  @media(max-width:768px){
    font-size:25px;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  color: #333;
  @media(max-width:768px){
    font-size:20px;
  }
`;

export const Description = styled.p`
  margin: 20px 0;
  color:grey;
  font-weight:200;
  font-size:25px;
`;

export const SizeSelector = styled.div`
  margin: 20px 0;
  font-weight:400;
`;

export const SizeButtons = styled.div`
  display: flex;
  gap: 10px;
  
`;

export const SizeButton = styled.button`
  padding: 10px;
  border: 1px solid ${(props) => (props.isActive ? '#000' : '#ccc')};
  border-radius:8px;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }
  &:focus{
    border: 1px solid #FF9900;
  }
`;

export const AddToCartButton = styled.button`
  padding: 15px 20px;
  background-color: #0099ff;
  font-weight:600;
  color:white;
  border:none;
  border-radius:8px;
  cursor: pointer;
  &:hover {
    background-color:#0051ff;
  }
  &:focus{
    border: 3px solid#000;
  }
`;

export const Hr = styled.hr`
  margin: 20px 0;
`;

export const ShippingInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const ShippingItem = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-right:100px;
  font-weight:200;
  @media(max-width:768px){
    margin-right:20px;  
    }
  p {
    width:100px;
  }
  img{
    height:60px;
    width:60px;
    object-fit:cover;
   
  }
`;

export const Finaldiv = styled.div`
  opacity:0;
`
