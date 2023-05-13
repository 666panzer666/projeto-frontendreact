import { OrderItem, Price, Name } from './styled';
import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../../util/formatCurrency';



function ProductCard({ products, amount, setAmount, cart, setCart, ordination, minFilter, maxFilter, searchFilter }) {

    function addCart(product) {
        const newItems = cart;
        let totalAmount = amount * 1;

        if (newItems.includes(product)) {
            newItems.filter(i => i === product)[0].quantity++;
            totalAmount += product.price;
            setAmount(totalAmount);
            setCart(newItems);
        } else {
            product.quantity = 1;
            newItems.push(product);
            totalAmount += product.price;
            setAmount(totalAmount);
            setCart(newItems);
        }
    }


    return (
        <>
            {products
                .filter((product) => minFilter ? product.price >= minFilter : product
                )
                .filter((product) => maxFilter ? product.price <= maxFilter : product
                )
                .filter((product) => searchFilter ? product.title.toLowerCase(maxFilter).includes(searchFilter.toLowerCase()) : product
                )
                .sort((a, b) => {
                    if (ordination === 'Crescente') {
                        return a.price - b.price;
                    } else if (ordination === 'Decrescente') {
                        return b.price - a.price;
                    }
                })
                .map(product => (
                    <OrderItem key={product.id} onClick={() => addCart(product)}>
                        <img src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={product.name} />
                        <Price>{formatCurrency(product.price)}</Price>
                        <Name>{product.title}</Name>
                        <button>
                            <BsFillCartPlusFill />
                        </button>
                    </OrderItem>
                ))}
        </>
    );
}

export default ProductCard;
