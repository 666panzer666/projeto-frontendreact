import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCard/Cart/Cart';
import styled, { createGlobalStyle } from 'styled-components';
import products from './assets/productsList';
import React, { useState } from 'react';
import Header from './Components/Header/Header';

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {  background-image: url(./bg.svg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ebebeb;
}
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 3fr minmax(250px, 1fr);
  align-content: flex-start;
`;

function App() {

    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState('');
    const [ordination, setOrdination] = useState('Crescente');

    return (
        <>
            <GlobalStyle />
            <Header />
            <Container>
                <Filters
                    minFilter={minFilter} setMinFilter={setMinFilter}
                    maxFilter={maxFilter} setMaxFilter={setMaxFilter}
                    searchFilter={searchFilter} setSearchFilter={setSearchFilter}
                />
                <Home
                    products={products}
                    amount={amount} setAmount={setAmount}
                    cart={cart} setCart={setCart}
                    ordination={ordination} setOrdination={setOrdination}
                    minFilter={minFilter} maxFilter={maxFilter} searchFilter={searchFilter}
                />
                <Cart
                    amount={amount} setAmount={setAmount}
                    cart={cart} setCart={setCart}
                />
            </Container>

        </>
    );
}

export default App;
