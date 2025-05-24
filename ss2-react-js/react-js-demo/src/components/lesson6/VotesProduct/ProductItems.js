function ProductItems({ products, onVote }) {
    return (
        <div className="product-item">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Votes: {product.votes} -&gt;
                        <button onClick={() => onVote(product.id)}> Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductItems;