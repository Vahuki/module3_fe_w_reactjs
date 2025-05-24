import { useState } from "react";
import ProductItems from "./ProductItems";

function ShowProduct() {
    const [products, setProducts] = useState(
        [
            { id: 1, name: "Product 1",  votes: 0 },
            { id: 2, name: "Product 2",  votes: 0 },
            { id: 3, name: "Product 3",  votes: 0 },
            { id: 4, name: "Product 4",  votes: 0 },
            { id: 5, name: "Product 5",  votes: 0 },
        ]
    );
    const handleVote = (id) => {
       setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, votes: product.votes + 1 } : product
            )
        );
    };

    

    return (
        <div>
            <ProductItems onVote={handleVote} products={products} />
        </div>
    );
}
export default ShowProduct;