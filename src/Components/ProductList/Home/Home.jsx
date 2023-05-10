import { useContext } from 'react';
import ProductCard from '../ProductCard/ProdutcCard';
import { Container, Order, ItemsContainer } from './styled';
import React from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import { BiSortAlt2 } from 'react-icons/bi';


function Home() {

    const {products, amount, setAmount, cart, setCart, ordination, setOrdination, minFilter, maxFilter, searchFilter } = useContext(GlobalContext);

    function handleOrdination(e) {
        setOrdination(e.target.value);
    }

    return (
        <>
            <Container>
                <Order>
                    <span>Quantidade de produtos: {products.length}</span>
                    <span>
                        <BiSortAlt2 />
                        Ordenação:
                        <select onChange={handleOrdination} value={ordination}>
                            <option value="Crescente">Crescente</option>
                            <option value="Decrescente">Decrescente</option>
                        </select>
                    </span>
                </Order>
                <ItemsContainer>
                    <ProductCard products={products} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart} ordination={ordination} minFilter={minFilter} maxFilter={maxFilter} searchFilter={searchFilter}/>
                </ItemsContainer>
            </Container>
        </>
    );
}

export default Home;
