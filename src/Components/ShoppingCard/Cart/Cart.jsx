import Items from "../Items/Items"
import { Container } from "./styled"

function Cart({ amount, setAmount, cart, setCart }) {
    return (
        <><Container>
            <Items amount={amount}  cart={cart} />
        </Container>
        </>
    )
}

export default Cart