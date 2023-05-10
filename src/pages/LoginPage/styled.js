import styled from 'styled-components';

export const MainContainer = styled.main `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;
padding-top: 75px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  button {
    width: 140px;
    align-self: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 1.2rem;
  justify-content: center;
  gap: 5px;
`;
