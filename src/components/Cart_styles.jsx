import styled from 'styled-components'

export const MainDiv = styled.div`
    display:flex;
    flex-direction:column;

`
export const HeadingDiv =styled.div`
    font-size:25px;
    margin-left:-2200px;
    color:black;

    @media(max-width:768px){
        margin-left:-500px;  
    }
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
    color:black;
`
export const ImageDiv = styled.img`
    width:120px;
    height:120px;
    border:2px solid #000;
    gap:30px;
`
export const DescriptionDiv = styled.div`
    margin-left:40px;
    font-size:18px;
    font-family:"Amazon Ember", Arial, sans-serif;
    font-weight:200;
    @media(max-width:768px){
        font-size:15px;
    }

`
export const Input = styled.input`
    width: 60px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border: 2px solid #ffd814;
    border-radius: 8px;
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
    background-color: #FF9900;;
    color:white;
    padding:10px 20px 10px 20px;
    font-weight: bold;
    font-size:16px;
    border-radius:8px;
    
    &:hover {
        background-color: #E68000;
        box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.3);
    }

    &:active {
        transform: scale(0.98);
    }

`