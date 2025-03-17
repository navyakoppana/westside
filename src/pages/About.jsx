import { assets } from '../assets/assets'
import styled from 'styled-components'
import NewsLetterBox from '../components/NewsLetterBox'
import Title from '../components/Title'

const HeadingDiv= styled.div`
  color:red;
  margin-bottom:50px;
  margin-left:-2300px;
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
  img{
    height:auto;
    width:80%;
  }
  
  p{
    width:50%;
    color:black;
    font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight:500;
    font-size:16px;
    @media(max-width:768px){
      width:100%;
  }
  }
  b{
    width:50%;
    color:black;
    font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`

const About = () => {
  return (
    <div>
      <HeadingDiv>
        <Title text1='About' text2='Us'></Title>
      </HeadingDiv>
      <Contentdiv>
        <div>
          <img src={assets.aboutus_img} alt="" />
        </div>
        <div>
          <b>Our vision is to design & deliver fashion brands.</b>
          <p>Our Customer Promise is - <b>First Price. Right Price.</b></p>
          <p> With a collection that is self-assisted, curated with fashion solutions highlighting incredible value and edited monthly launches.</p>
          <p> We are famous for Our Point of View as it comes alive through our backwalls & See It Buy It. </p>
          <p>The tables drive Seasonal Statement Lines that excite with style and value. </p>
          <p>Our service is efficient, our space is easy to navigate and our returns policy is simple and customer friendly.</p>
          <p>We are confident, optimistic, colourful and have a youthful spirit.</p>
          <div>
            <b>Our Mission</b>
            <p>Our mission at Westside is satisfy our customers with the range, quality and value of the products we offer.We shall always be in the forefront of fashion and services by anticipating and exceeding the expectations of our customers.</p>
          </div>
        </div>
      </Contentdiv>
      <NewsLetterBox/>
    </div>
  )
}

export default About