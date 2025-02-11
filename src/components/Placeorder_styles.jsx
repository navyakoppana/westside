import styled from 'styled-components'

export const MainForm=styled.form`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:50px;

    @media(max-width:768px){
       flex-direction:column;
       gap:20px;
    }
`
export const LeftDiv=styled.div`
    display:flex;
    flex-direction:column;
    gap:20px; 
    width:50%;
    margin-top:100px;
    @media(max-width:768px){
       margin-top:50px;
    }

`
export const HeadingDiv=styled.div`
    font-size:20px;
    color:black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom:50px;
    @media(max-width:768px){
       margin-bottom:20px;
    }
`
export const NameDiv=styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    justify-content:space-between;
    width:50%;
    
    input{
        padding:5px 60px 5px 5px;
    }
    
`
export const Address=styled.input`
    width:49.5%;
    padding:5px 0px 5px 0px;
`
export const AddressSubDiv1=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    justify-content:space-between;
    width:50%;
    input{
        padding:5px 60px 5px 5px;
    }
    
`

export const AddressSubDiv2=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    justify-content:space-between;
    width:50%;
    input{
        padding:5px 60px 5px 5px;
    }
    
`
export const Phone=styled.input`
    width:49.5%;
    padding:5px 0px 5px 0px;
`
export const RightDiv=styled.div`
    display:flex;
    flex-direction:column;
    margin-right:350px;
    width:50%;
    margin-top:200px;
    @media(max-width:768px){
        width:100%;
        margin-top:50px;
    }


`
export const PaymentDiv=styled.div`
    font-size:20px;
    color:black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`

export const Dot = styled.p`
    width:10px;
    height:10px;
    border: 1px solid #000; 
    border-radius: 50%; 
    margin-right: 10px;
    background-color: ${(props) => (props.isSelected ? 'green' : 'transparent')};
`

export const SelectPaymentDiv = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width:auto;
        height:50px;
    }
`
export const PlaceOrderButton = styled.button`
    background-color:black;
    color:white;
    padding:10px 30px 10px 30px;
    font-size:12px;
    font-family:'Times New Roman';
    margin-top:20px;
    margin-left:85%;

    @media(max-width:768px){
        margin-left:75%;
    }
`