import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import Header from './Components/Header/Header';
import GlobalState from './contexts/GlobalState';

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
    display: grid;
    grid-template-columns: 200px 1fr;
  padding-top: 75px;
  max-width: 1100px;
  margin: 0 auto;
`;

function App() {

    return (
        <>
            <GlobalStyle />
            <GlobalState >
                <Header />
                <Container>
                    <Filters />
                    <Home />
                </Container>
            </GlobalState>

        </>
    );
}

export default App;
