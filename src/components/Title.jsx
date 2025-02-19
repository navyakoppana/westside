import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration: double;
  font-variant-caps: all-petite-caps;
  @media (max-width: 768px) {
    font-size:30px;
    margin-top:20px;
  }
  color:maroon;
  font-size:50px;
  margin-top:-50px;
`
const Title = ({text1,text2}) => {
  return (
    <StyledDiv className='title'>
        <p>{text1} <span>{text2}</span></p>
    </StyledDiv>
  )
}

export default Title 