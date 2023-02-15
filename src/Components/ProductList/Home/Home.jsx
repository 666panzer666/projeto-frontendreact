import ProductCard from "../ProductCard/ProdutcCard";
import { Container, Order, ItemsContainer } from "./styled";

function Home( { products }) {
    console.log(products);
    return (
        <>
            <Container>
                <Order>
                    <span>Quantidade de produtos: {products.length}</span>
                    <span>Ordenação:
                        <select>
                            <option value="Crescente">Crescente</option>
                            <option value="Decrescente">Decrescente</option>
                        </select>
                    </span>
                </Order>
                <ItemsContainer>
                    <ProductCard products={products}/>
                </ItemsContainer>
            </Container>
        </>
    )
}

export default Home;