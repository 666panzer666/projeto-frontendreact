import React from 'react';
import { Button, Quantity } from './styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../ShoppingCard/Cart/Cart';
import GlobalContext from '../../contexts/GlobalContext';
import { useContext } from 'react';

function CartButton () {

    const { setModalCart, cart } = useContext(GlobalContext);

    function totalItems() {
        let counter = 0;
        for (let i=0; i < cart.length; i++) {
            counter += cart[i].quantity;
        }
        return counter;
    }
    
    return (
        <>
            <Button >
                <AiOutlineShoppingCart onClick={() => setModalCart(true)}/>
                <Quantity>{totalItems()}</Quantity>
                <Cart />
            </Button>
            
        </>
    );
}

export default CartButton;
