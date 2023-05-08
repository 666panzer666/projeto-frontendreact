import React from 'react';
import { HeaderStyled, Container } from './styled';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

function Header () {
    return (
        <HeaderStyled>
            <Container>
                <SearchBar />
                <CartButton />
            </Container>
        </HeaderStyled>
    );
}

export default Header;
