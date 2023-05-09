import Items from '../Items/Items';
import { Container } from './styled';
import React, { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import { GrClose } from 'react-icons/gr';

function Cart() {
    const { amount, setAmount, cart, setCart, setDisplayCart } = useContext(GlobalContext);
    return (
        <>
            <Container>
                <GrClose onClick={() => setDisplayCart(false)} />
                <Items amount={amount}  cart={cart} setCart={setCart} setAmount={setAmount} />
            </Container>
        </>
    );
}

export default Cart;
