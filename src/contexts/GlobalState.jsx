import { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import React from 'react';
// import products from '../assets/productsList';
import { fetchItems } from '../api/mercadoLivreAPI';


function GlobalState(props) {

    const [products, setProducts ] = useState([]);
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState('');
    const [ordination, setOrdination] = useState('Crescente');
    const [ modalCart, setModalCart ] = useState(false);
    const [ load, setLoad ] = useState(true);
    const [ search, setSearch ] = useState('');

    async function getAllProducts() {
        try {
            setLoad(true);
            const products = await fetchItems(search === '' ? 'astronauta' : search);
            const result = await Promise.all(products);
            setProducts(result);
            setLoad(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [Promise]);


    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     localStorage.setItem('amount', JSON.stringify(amount));
    // }, [amount]);

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
        setProducts,
        modalCart,
        setModalCart,
        load,
        setLoad,
        search,
        setSearch,
        getAllProducts
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
