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
background: #f8f8f8;
border-radius: 8px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;

&:hover {
  background: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
}

 @media (max-width: 768px) {
  display:${({ show }) => (show ? 'block' : 'none')};
 }
`
export const StyledDiv2 = styled.div`
border: 2px solid #333;
padding: 10px;
display: inline-block;
width:fit-content;
background: #f8f8f8;
border-radius: 8px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;

&:hover {
  background: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
   display: ${({ show }) => (show ? 'block' : 'none')}; 
}
 `
 /* === Styled Headings === */
export const StyledHeading = styled.p`
font-size: 15px;
font-weight: 700;
color:teal;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
text-transform: uppercase;
letter-spacing: 0.5px;

@media (max-width: 768px) {
  font-size: 18px;
}
`;

export const StyledSubHeading = styled.span`
font-size: 18px;
font-weight: 500;
color: #555;
`;

export const ItemDiv = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px; /* Adjust the gap as needed */
width: 100%; /* Ensure it takes the full width */
margin-top:50px;


@media(max-width:768px){
  grid-template-columns: repeat(2, 1fr);
}
`

export const SortDiv = styled.div`
display: inline-block;
margin-right:300px;

@media(max-width:768px){
  margin-right:100px;
  margin-top:50px;
}
`
export const StyledSelect = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }

  &:focus {
    border-color: #FF9900;
    outline: none;
    box-shadow: 0px 0px 5px rgba(255, 153, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const SortOption = styled.option`
  font-size: 12px;
  color: #333;
  padding: 10px;
`;


/* === Global Container === */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #ffffff; /* Amazon-like clean white background */
`;

/* === Header Section === */
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  margin-left:100px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 10px;
    margin-left:30px;
    margin-top:-40px;
  }
`;

/* === Dropdown Icon === */
export const DropdownIcon = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
    height: 24px;
    width: 20px;
  }
`;


