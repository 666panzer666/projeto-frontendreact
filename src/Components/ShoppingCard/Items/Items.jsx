function Items({ amount, setAmount, cart, setCart }) {

    function removeItem(item){
        const newCart = cart;
        let newAmount = amount;
        newCart.filter(i => i === item)[0].quantity --;
        newAmount -= item.price;
        setCart(newCart);
        setAmount(newAmount);
    }

    return (
        <>
            <h2>Carrinho:</h2>
            {cart.map(product => (
                product.quantity > 0 ? (
                <p key={product.id}>{product.quantity} x {product.title} -
                    <b> R${Math.round(product.price * product.quantity * 100) / 100}</b>
                    <button onClick={() => removeItem(product)}>Remover</button>
                </p>) : (<></>)
            ))}

            {amount > 0 ? (<>
                <p>Valor total:</p>
                <p><b>R${Math.round(amount * 100) / 100}</b></p>
                </>) : 
                (<></>)
            }
        </>
    )
}

export default Items