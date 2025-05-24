function CartItem({ item, onChangeQuantity }) {
    return (
        <div className="cart-item">
            {item.map((item) => (
                <div>
                    {item.name} - Price: ${item.price}
                    <input style={{ marginLeft: "5px" }}
                        type="number"
                        min="0"
                        onChange={(e) => onChangeQuantity(item.id, parseInt(e.target.value))}
                        value={item.quantity}>
                    </input>
                </div>
            ))}
        </div>
    );
}
export default CartItem;