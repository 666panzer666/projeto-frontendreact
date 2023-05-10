import React from 'react';
import Filters from '../Components/Filters/Filters';
import Home from '../Components/ProductList/Home/Home';
import styled from 'styled-components';
import Header from '../Components/Header/Header';

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 75px;
  max-width: 1100px;
  margin: 0 auto;
    `;


function HomePage() {
    return ( 
        <>
            <Header />
            <Container>
                <Filters />
                <Home />
            </Container>
        </>
    );
}

export default HomePage;
