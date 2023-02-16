import { useState } from "react";
import ProductCard from "../ProductCard/ProdutcCard";
import { Container, Order, ItemsContainer } from "./styled";

function Home( { products, amount, setAmount, cart, setCart }) {
    
    const [ordination, setOrdination] = useState("Crescente")

    function changeOrdination(e) {
        if (e.target.value === "Crescente") {
            setOrdination("Crescente");
        } else {
            setOrdination("Decrescente");
        }
    }

    return (
        <>
            <Container>
                <Order>
                    <span>Quantidade de produtos: {products.length}</span>
                    <span>Ordenação:
                        <select value={ordination} onChange={changeOrdination}>
                            <option value="Crescente">Crescente</option>
                            <option value="Decrescente">Decrescente</option>
                        </select>
                    </span>
                </Order>
                <ItemsContainer>
                    <ProductCard products={products} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
                </ItemsContainer>
            </Container>
        </>
    )
}

export default Home;