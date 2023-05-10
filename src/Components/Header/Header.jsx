import React from 'react';
import { HeaderStyled, Container, Logo, Login } from './styled';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import logo from './SMStorelogo.svg';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { goHome, goToLogin, goToSignUp } from '../../routes/coordinator';

function Header () {

    const navigate = useNavigate();

    return (
        <HeaderStyled>
            <Container>
                <Logo src={logo} onClick={() => goHome(navigate)}/>
                <SearchBar />
                <Login>
                    <div className={'profile-icon'}>
                        <CgProfile />
                    </div>
                    <div className={'login-text'}>
                        <p>
                            Faça <b className={'link'} onClick={() => goToLogin(navigate)}>LOGIN</b> ou 
                        </p>
                        <p>
                            crie seu <b className={'link'} onClick={() => goToSignUp(navigate)}>CADASTRO</b>
                        </p>
                    </div>
                </Login>
                <CartButton />
            </Container>
        </HeaderStyled>
    );
}

export default Header;
