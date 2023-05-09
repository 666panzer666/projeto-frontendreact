import styled from 'styled-components';

export const HeaderStyled = styled.header `
  background-color: #114B8C;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img `

`;

export const Container = styled.div `
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #BDC7D2;
`;

export const Login = styled.div `
  display: flex;
  .profile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  .login-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    font-size: 0.7rem;
  }
  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
