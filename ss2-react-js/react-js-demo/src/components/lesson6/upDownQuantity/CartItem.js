import { useState } from 'react';
function CartItem() {
    const [item, setItem] = useState([
        { id: 1, name: 'Item 1', price: 10, quantity: 1 },
        { id: 2, name: 'Item 2', price: 20, quantity: 1 },
        { id: 3, name: 'Item 3', price: 30, quantity: 1 },
    ]);
    function updateQuantity(id,deta) {
        setItem((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + deta } : item
            )
        );
    }
    

    return (
        <div className="cart-item">
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity} &nbsp;
                        <button onClick={() => updateQuantity(item.id,1)}>+</button>
                        <button onClick={() => updateQuantity(item.id,-1)}
                            disabled={item.quantity===0}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CartItem;