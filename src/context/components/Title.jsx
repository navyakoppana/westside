import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  justify-content:center;
  alignment-items:center;
  text-decoration:double;
  margin-left:1000px;
  font-variant-caps: all-petite-caps;
  @media (max-width: 768px) {
    margin-left:250px;
    margin-top:-600px;
    font-size:16px;
  }
  color:maroon;
  font-size:50px;
  margin-top:-50px;
`
const Title = () => {
  return (
    <StyledDiv className='title'>
        <h2>Latest Collections</h2>
    </StyledDiv>
  )
}

export default Title 