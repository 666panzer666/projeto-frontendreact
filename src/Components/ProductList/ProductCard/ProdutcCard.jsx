import { OrderItem } from './styled'

function ProductCard({ products, amount, setAmount, cart, setCart, ordination, minFilter, maxFilter, searchFilter }) {

    function addCart(product) {
        const newItems = cart;
        let totalAmount = amount * 1;

        if (newItems.includes(product)) {
            newItems.filter(i => i === product)[0].quantity++;
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
            {products
                .filter((product) => minFilter ? product.price >= minFilter : product
                )
                .filter((product) => maxFilter ? product.price <= maxFilter : product
                )
                .filter((product) => searchFilter ? product.title.toLowerCase(maxFilter).includes(searchFilter.toLowerCase()) : product
                )
                .sort((a, b) => {
                    if (ordination === "Crescente") {
                        return a.price - b.price;
                    } else if (ordination === "Decrescente") {
                        return b.price - a.price;
                    }
                })
                .map(product => (
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