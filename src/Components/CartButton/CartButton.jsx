import React from 'react';
import { Button } from './styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartButton () {
    return (
        <Button>
            <AiOutlineShoppingCart />
            <span>1</span>
        </Button>
    );
}

export default CartButton;
