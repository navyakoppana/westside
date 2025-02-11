import styled from 'styled-components'

export const CombinedDiv = styled.div`
display:flex;
flex-direction:row;
`
export const StyledDiv1 = styled.div`
border: 2px solid #333;
padding: 10px;
display: inline-block;
margin-bottom:50px;

@media (max-width: 768px) {
  display:${({ show }) => (show ? 'block' : 'none')};
}

`
export const StyledDiv2 = styled.div`
border: 2px solid #333;
padding: 10px;
display: inline-block;
width:fit-content;

@media (max-width: 768px) {
  display: ${({ show }) => (show ? 'block' : 'none')};
}
`
export const DropdownIcon = styled.img`
display: none;

@media (max-width: 768px) {
  display: inline-block;
  cursor:pointer;
  height:20px;
  width:15px;
  
}
`
export const StyledHeading = styled.p`
font-size:15px;  
margin-top:20px;
font-weight:bold;
width:150px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color:maroon;
@media (max-width: 768px) {
  width:fit-content;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start; /* Ensures children align to the start */
padding: 0 16px; /* Add some padding to avoid hitting the edges of the screen */
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%; /* Ensures it takes the full width of the container */
margin-bottom: 16px; /* Add some space below the header */
margin-left:100px;

@media(max-width:768px){
  margin-left:30px;
}

`

export const ItemDiv = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px; /* Adjust the gap as needed */
width: 100%; /* Ensure it takes the full width */

@media(max-width:768px){
  grid-template-columns: repeat(2, 1fr);
}
`

export const SortDiv = styled.div`
display: inline-block;
margin-right:300px;
margin-top:20px;

@media(max-width:768px){
  margin-right:100px;
}
`