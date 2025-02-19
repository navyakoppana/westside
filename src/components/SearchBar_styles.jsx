import styled  from "styled-components";

export const MainDiv =styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    margin-bottom:10px;
`
export const SearchDiv = styled.form`
    display:flex;
    width:400px; 
    position:relative; 

`
export const SearchInput = styled.input`
    padding:10px 20px 10px 10px;
    border-radius :50px;
    width:100%;
    font-size:20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   

    @media(max-width:768px){
        padding:5px 10px 5px 5px;
        font-size:16px;
    }
`
export const SearchIcon = styled.img`
    position:absolute;
    height:20px;
    width:20px;
    margin-left:370px;
    margin-top:12px;
    cursor:pointer;

    @media(max-width:768px){
        margin-top:10px;
        height:15px;
        width:15px;
    }
`
export const CrossIcon = styled.img`
    margin-left:10px;
    cursor:pointer;
    @media(max-width:768px){
        height:20px;
        width:20px;
    }
`