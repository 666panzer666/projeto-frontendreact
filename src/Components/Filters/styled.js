import styled from 'styled-components';

export const FilterTitle = styled.h2 `
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    div{
        padding-left: 5px;
        font-size: 18px;
        font-weight: 500;
    }

`;

export const FilterContainer = styled.aside `
    display: flex;
    flex-direction: column;
    border: none;
    background-color: white;
    padding: 5px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;

    div {
        display: flex;
        flex-direction: column;
    }
    button {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px 0;
        gap: 5px;
        border: none;
        background-color: rgba(255, 255, 255, 0);
    }
    button:hover {
        text-decoration: underline;
    }
    .row {
        padding: 5px 0;
    }
    .row label {
        padding-bottom: 2px;
    }
    input {
        border: none;
        background-color: #ebebeb;
        padding: 5px 4px;
        border-radius: 3px;
    }
    
`;
