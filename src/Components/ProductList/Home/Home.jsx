import ProductCard from "../ProductCard/ProdutcCard";
import { Container, Order, ItemsContainer } from "./styled";

function Home( { products, amount, setAmount, cart, setCart, ordination, setOrdination, minFilter, maxFilter, searchFilter }) {

    function handleOrdination(e) {
        setOrdination(e.target.value);
    };

    return (
        <>
            <Container>
                <Order>
                    <span>Quantidade de produtos: {products.length}</span>
                    <span>Ordenação:
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
    )
}

export default Home;