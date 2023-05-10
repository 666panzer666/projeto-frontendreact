import Items from '../Items/Items';
import { Container, Vazio } from './styled';
import React, { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import { GrClose } from 'react-icons/gr';

function Cart() {
    const { amount, setAmount, cart, setCart, modalCart, setModalCart } = useContext(GlobalContext);

    function renderCart() {
        return (
            <>
                <GrClose onClick={() => {
                    setModalCart(false);
                }} />
                <Items amount={amount}  cart={cart} setCart={setCart} setAmount={setAmount} />
            </>
        );
    }

    function renderNoItems() {
        return (
            <Vazio>
                <GrClose onClick={() => {
                    setModalCart(false);
                }} />
                Carrinho Vazio!
            </Vazio>
        );
    }

    return (
        <Container displayCart={modalCart} >
            { cart.length > 0 ? renderCart() : renderNoItems() }
        </Container>
    );
}

export default Cart;
