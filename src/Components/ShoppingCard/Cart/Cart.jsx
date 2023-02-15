import { Container } from "./styled"

function Cart({ amount, setAmount, cart, setCart }) {
    return (
        <><Container>

            <h2>Carrinho:</h2>
            <p>Xx Produto<button>Remover</button></p>
            <p>Valor total:</p>
            <p>R$XXX,XX</p>

        </Container>
        </>
    )
}

export default Cart