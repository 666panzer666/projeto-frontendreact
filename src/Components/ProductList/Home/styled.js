import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  `;

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  svg {
    color: #c7560e;
    font-size: 1.2rem;
  }
  span {
    display: flex;
    gap: 2px;
  }
    `;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5rem;
    `;

export const Spinner = styled.div`
width: 100%;
padding: 50px;
display: flex;
align-items: center;
justify-content: center;
`;
