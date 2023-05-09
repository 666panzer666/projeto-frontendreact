import styled from 'styled-components';

export const OrderItem = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    background-color: white;
    border-radius: 3px;
    p {
        margin: 0;
        padding: 5px;
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 12px;
        width: 45px;
        height: 45px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        border: none;
        background-color: rgba(255, 255, 255, 0.6);
    }

    :hover button {
        display: flex;
    }
    :hover {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    }
    img {
        border-radius: 3px 3px 0 0;
    }

`;

export const Price = styled.div`
    padding: 10px;
    font-size: 25px;
    font-weight: 400;
    display: block;
`;

export const Name = styled.div`
    padding: 0 10px 0 10px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0,0,0,0.8)
`;

