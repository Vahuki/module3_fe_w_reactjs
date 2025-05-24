import { useState } from "react";
import CartItem from "./CartItem";
function ShowCart() {
    const [cart, setCart] = useState(
        [
            { id: 1, name: "Product 1", price: 100, quantity: 2 },
            { id: 2, name: "Product 2", price: 200, quantity: 1 },
            { id: 3, name: "Product 3", price: 300, quantity: 3 },
        ]
    );
    const handleChangeQuantity = (id, newQuantity) => {
        setCart(
            (previos) => previos.map(
                (item) => item.id === id 
                ? {...item, quantity: newQuantity}
                : item
            )
        );
    }
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
    return (
        <div>
            <h1>Shopping Cart</h1>
            <CartItem item={cart} onChangeQuantity={handleChangeQuantity} />
            <h2>Total: ${totalPrice.toLocaleString()}</h2>
        </div>
    );

}
export default ShowCart;