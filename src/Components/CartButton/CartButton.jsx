import React from 'react';
import { Button, Quantity } from './styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../ShoppingCard/Cart/Cart';
import GlobalContext from '../../contexts/GlobalContext';
import { useContext } from 'react';


function CartButton () {

    const { displayCart, setDisplayCart } = useContext(GlobalContext);
    console.log(displayCart);
    
    return (
        <>
            <Button onClick={() => setDisplayCart(true)}>
                <AiOutlineShoppingCart />
                <Quantity>1</Quantity>
                {displayCart && <Cart setDisplayCart={setDisplayCart} />}
            </Button>
            
        </>
    );
}

export default CartButton;
