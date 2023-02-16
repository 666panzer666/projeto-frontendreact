import { OrderItem } from './styled'

function ProductCard({ products, amount, setAmount, cart, setCart }) {

    function addCart(product) {
        const newItems = cart;
        let totalAmount = amount*1;

        if (cart.includes(product)) {
            newItems.filter(i => i === product)[0].quantity ++;
            totalAmount += product.price
            setAmount(totalAmount);
            setCart(newItems);
        } else {
            product.quantity = 1;
            newItems.push(product);
            totalAmount += product.price
            setAmount(totalAmount);
            setCart(newItems);
        } 
    };


    return (
        <>
            {products.map(product => (
                <OrderItem key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.title}</p>
                    <p>R$ {product.price}</p>
                    <button onClick={() => addCart(product)}>Adicionar ao carrinho</button>
                </OrderItem>
            ))}
        </>
    )
}

export default ProductCard;