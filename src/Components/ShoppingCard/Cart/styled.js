import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
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
  &>svg {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  `;
