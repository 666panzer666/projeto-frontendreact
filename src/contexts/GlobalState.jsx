import { useState } from 'react';
import GlobalContext from './GlobalContext';
import React from 'react';
import products from '../assets/productsList';


function GlobalState(props) {

    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState('');
    const [ordination, setOrdination] = useState('Crescente');
    const [ displayCart, setDisplayCart ] = useState(false);

    const data = {
        minFilter,
        setMinFilter,
        maxFilter,
        setMaxFilter,
        searchFilter,
        setSearchFilter,
        cart,
        setCart,
        amount,
        setAmount,
        ordination,
        setOrdination,
        products,
        displayCart,
        setDisplayCart
    };
    return (
        <>
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        </>
    );
}

export default GlobalState;
