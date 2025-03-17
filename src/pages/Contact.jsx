import { assets } from '../assets/assets'
import styled from 'styled-components'
import Title from '../components/Title'

const HeadingDiv= styled.div`
  color:red;
  margin-bottom:50px;
  margin-left:-2200px;
  font-size:20px;
  @media(max-width:768px){
    margin-left:-600px;
  }
`
const Contentdiv = styled.div`
  display:flex;
  flex-direction:row;
  gap:50px;
  margin-bottom:200px;
  color:black;
  img{
    height:50%;
    width:30%;
    margin-left:200px;
    @media(max-width:768px){
      margin-left:100px;
    }
    
  }
  
  p{
    width:50%;
    font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  b{
    width:50%;
    color:black;
    font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`
export const JobButton = styled.button`
    background-color:white;
    color:black;
    padding:10px 30px 10px 30px;
    font-size:15px;
    font-family:'Times New Roman';
    margin-top:20px;
    margin-bottom:300px;
    &:hover{
      background-color:black;
      color:white;
    }
`
const Contact = () => {
  return (
    <div>
      <HeadingDiv>
      <Title text1='Contact' text2='Us'></Title>
      </HeadingDiv>
      <Contentdiv>
        <img src={assets.contactus_img} alt="" />
        <div>
          <b>Our Store</b>
          <p>56875 Windsor Road <br/> Suite 105,Houston,Texas,USA</p>
          <p>Tel:405-456-7890 <br/>Email:contact@westside.com</p>
          <b>Careers at Westside</b>
          <p>Learn more about our team and job openings.</p>
          <JobButton>Explore jobs</JobButton>
        </div>
      </Contentdiv>
    </div>
  )
}

export default Contact