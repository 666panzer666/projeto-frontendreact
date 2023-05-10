import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: ${({displayCart}) => displayCart ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  margin: 5px;
  right: 0;
  top: 30px;
  border: none;
  background-color: white;
  border-radius: 3px;
  min-width: 400px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  cursor: auto;
  z-index: 5;
  &>svg {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  
  `;

export const Vazio = styled.div`
  color: black;
  align-self: center;
  padding: 30px 0 ;
  &>svg {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;
