import { OrderItem } from './styled'

function ProductCard ( {products} )  {

    return (
        <>
        {products.map(product => (
                        <OrderItem key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.title}</p>
                            <p>R$ {product.price}</p>
                            <button>Adicionar ao carrinho</button>
                        </OrderItem>
                    ))}
        </>
    )
}

export default ProductCard;