import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: black;
    font-size: 18px;
`;

export const Title = styled.h2 `
    font-weight: 600;
`;

export const CartItems = styled.div `
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0,0,0,0.8);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    button{
        border: none;
        background-color: white;
        color: #E94440;
    }
    button>svg {
        font-size: 18px;
    }
`;

export const Total = styled.div `
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0,0,0,0.8);
    display: flex;
    gap: 5px;
    padding: 10px 0;
`;
