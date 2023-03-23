import { useEffect } from "react";

function Items({ amount, setAmount, cart, setCart }) {

    const cartRender = cart.map(product => (
        product.quantity > 0 ? (
            <p key={product.id}>{product.quantity} x {product.title} -
                <b> R${Math.round(product.price * product.quantity * 100) / 100}</b>
                <button onClick={() => removeItem(product)}>Remover</button>
            </p>) : (<></>)
    ));

    function removeItem(item) {
        let newCart = cart;
        let newAmount = amount;
        if (newCart.filter(i => i === item)[0].quantity === 1) {
            newCart = cart.filter(i => i !== item)

        } else {
            newCart.filter(i => i === item)[0].quantity--;
        }
        newAmount -= item.price;
        setCart(newCart);
        setAmount(newAmount);
    }

    // useEffect(() => {
    //     const cartString = localStorage.getItem("cart") || [];
    //     const cart = JSON.parse(cartString);
    //     setCart(cart);
    // }, []);

    // useEffect(() => {
    //     const cartString = JSON.stringify(cart);
    //     localStorage.setItem("cart", cartString);
    // }, [cartRender]);

    return (
        <>
            <h2>Carrinho:</h2>
         
            {cartRender}

            {amount > 0.009 ? (<>
                <p>Valor total:</p>
                <p><b>R${Math.round(amount * 100) / 100}</b></p>
            </>) :
                (<></>)
            }
        </>
    )
}

export default Items