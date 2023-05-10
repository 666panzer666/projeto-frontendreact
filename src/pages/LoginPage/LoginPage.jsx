import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import { FormContainer, InputContainer, MainContainer } from './styled.js';
import useForms from '../../hooks/useForms.js';
import { baseURL } from '../../constants/baseURL.js';
import axios from 'axios';
import Header from '../../Components/Header/Header';


function LoginPage() {
    const navigate = useNavigate();
    const { form, onChange, limparCampos } = useForms({
        email: '',
        senha: '',
    });

    function fazerLogin(e) {
        e.preventDefault();
        const body = {
            email: form.email,
            password: form.senha,
        };
        axios.post(`${baseURL}/user/login`, body)
            .then((res) => {
                limparCampos();
                localStorage.setItem('token', res.data.token);
                alert(res.data.message);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });
    }


    return (
        <>
            <Header />
            <MainContainer>
                <h1>Login</h1>
                <FormContainer onSubmit={fazerLogin}>
                    <InputContainer>
                        <label htmlFor="email" >E-mail:</label>
                        <input
                            id="email"
                            required
                            name="email"
                            value={form.email}
                            onChange={onChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            required
                            name="senha"
                            value={form.senha}
                            onChange={onChange}
                        />
                    </InputContainer>
                    <button>Entrar</button>
                    <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
                </FormContainer>
            </MainContainer>
        </>
    );
}

export default LoginPage;
