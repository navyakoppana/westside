import styled from 'styled-components'

export const MainDiv = styled.div`
    display:flex;
    flex-direction:column;

`
export const HeadingDiv =styled.div`
    font-size:25px;
    color:black;
`
export const CartInfoDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
`
export const SubDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-grow: 1; /* Allow SubDiv to take available space */
`
export const ImageDiv = styled.img`
    width:120px;
    height:120px;
    border:2px solid #000;
    gap:30px;
`
export const DescriptionDiv = styled.div`
    margin-left:40px;
    font-size:16px;
    font-weight:bold;
`
export const Input = styled.input`
    width: 60px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 50%;

    @media(max-width:768px){
        margin-right:25%;
    }
`
export const CartTotalDiv = styled.div`
    margin-left:80%;
    @media(max-width:768px){
        margin-left:0;
    }
`
export const CheckoutDiv = styled.div`
    margin-left:90%;
    display:inline-block;
    width:100%;
    @media(max-width:768px){
        margin-left:65%;
    }

`
export const CheckoutButton = styled.button`
    background-color:black;
    color:white;
    padding:10px 20px 10px 20px;
    font-size:16px;
    font-family:'Times New Roman';
`