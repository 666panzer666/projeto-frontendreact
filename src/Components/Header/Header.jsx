import React from 'react';
import { HeaderStyled, Container, Logo, Login } from './styled';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import logo from './SMStorelogo.svg';
import { CgProfile } from 'react-icons/cg';

function Header () {
    return (
        <HeaderStyled>
            <Container>
                <Logo src={logo} />
                <SearchBar />
                <Login>
                    <div className={'profile-icon'}>
                        <CgProfile />
                    </div>
                    <div className={'login-text'}>
                        <p>
                            Faça <b className={'link'}>LOGIN</b> ou 
                        </p>
                        <p>
                            crie seu <b className={'link'}>CADASTRO</b>
                        </p>
                    </div>
                </Login>
                <CartButton />
            </Container>
        </HeaderStyled>
    );
}

export default Header;
