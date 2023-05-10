import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import GlobalState from './contexts/GlobalState';
import Router from './routes/Router';

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {  
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ebebeb;
}
`;

const Container = styled.div`
  margin: 0 auto;
`;

function App() {

    return (
        <>
            <GlobalStyle />
            <GlobalState >
                <Container>
                    <Router />
                </Container>
            </GlobalState>

        </>
    );
}

export default App;
