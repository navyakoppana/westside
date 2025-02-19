import styled from 'styled-components';

export const MainForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-weight:200;
    margin-bottom: 50px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 15px;
    }
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    margin-top: 50px;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
    }
`;

export const HeadingDiv = styled.div`
    font-size: 22px;
    color: #333;
    margin-bottom: 40px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

export const NameDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    width: 50%;

    input {
        flex: 1;
        padding: 5px 60px 5px 5px;
        border: 1px solid #ccc;
        border-radius: 6px;
        transition: 0.3s;
        
        &:focus {
            border-color: #FF9900;
            box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
        }
    }
`;

export const Address = styled.input`
    width: 50%;
    padding: 5px 0px 5px 0px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: 0.3s;

    &:focus {
        border-color: #FF9900;
        box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
    }
`;

export const AddressSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    width: 50%;

    input {
        flex: 1;
        padding: 5px 60px 5px 5px;
        border: 1px solid #ccc;
        border-radius: 6px;
        transition: 0.3s;
        
        &:focus {
            border-color: #FF9900;
            box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
        }
    }
`;

export const Phone = styled.input`
    width: 50%;
    padding: 5px 0px 5px 0px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: 0.3s;

    &:focus {
        border-color: #FF9900;
        box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
    }
`;

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 100px;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
    }
`;

export const PaymentDiv = styled.div`
    font-size: 22px;
    color: #222;
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const Dot = styled.span`
    width: 12px;
    height: 12px;
    border: 2px solid #333;
    border-radius: 50%;
    margin-right: 10px;
    display: inline-block;
    background-color: ${(props) => (props.isSelected ? '#FF9900' : 'transparent')};
`;

export const SelectPaymentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s;
    
    &:hover {
        background-color: rgba(255, 153, 0, 0.1);
    }

    img {
        height: 40px;
        width: auto;
    }
`;

export const PlaceOrderButton = styled.button`
    background-color: #FF9900;
    color: white;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    align-self: flex-end;

    &:hover {
        background-color: #E68000;
        box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.3);
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 768px) {
        width: 100%;
        align-self: center;
    }
`;
