import styled from 'styled-components';

export const Button = styled.button `
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 5px;
 border: none;
 background: none;
 cursor: pointer;
 position: relative;
 margin-left: 20px;
 color: #BDC7D2;
`;

export const Quantity = styled.span `
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 11px;
  font-weight:600;
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
