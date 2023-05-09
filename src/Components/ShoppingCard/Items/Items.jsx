import React from 'react';
import { Title, CartItems, Total, Container } from './styled';
import { BsCartX } from 'react-icons/bs';
import formatCurrency from '../../../util/formatCurrency';

function Items({ amount, setAmount, cart, setCart }) {

    const cartRender = cart.map(product => (
        product.quantity > 0 ? (
            <CartItems key={product.id}>
                <p>{product.quantity} x {product.title}</p>
                <b> {formatCurrency(product.price * product.quantity)}</b>
                <button onClick={() => removeItem(product)}><BsCartX /></button>
            </CartItems>) : (<></>)
    ));

    function removeItem(item) {
        let newCart = cart;
        let newAmount = amount;
        if (newCart.filter(i => i === item)[0].quantity === 1) {
            newCart = cart.filter(i => i !== item);

        } else {
            newCart.filter(i => i === item)[0].quantity--;
        }
        newAmount -= item.price;
        setCart(newCart);
        setAmount(newAmount);
    }

    return (
        <Container>
            <Title>Carrinho:</Title>
         
            {cartRender}

            {amount > 0.009 ? (<Total>
                <p>Valor total:</p>
                <p><b>{formatCurrency(amount)}</b></p>
            </Total>) :
                (<></>)
            }
        </Container>
    );
}

export default Items;
