function Items({ amount, setAmount, cart, setCart }) {

    return (
        <>
            <h2>Carrinho:</h2>
            {cart.map(product => (
                <p key={product.id}>{product.quantity} x {product.title} -
                    <b> R${Math.round(product.price * product.quantity * 100) / 100}</b>
                    <button>Remover</button>
                </p>
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