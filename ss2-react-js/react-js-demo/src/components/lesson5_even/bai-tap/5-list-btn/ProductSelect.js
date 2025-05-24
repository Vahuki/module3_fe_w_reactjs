const ProductSelect = ({onSelect }) => {
    const handleChange = (e) => {
        const code = e.target.value;
        onSelect(code); // chỉ truyền mã  lên cha
    };
    return (
        <div>
            <select onChange={handleChange}>
                <option value="ip">Iphone</option>
                <option value="im">Imac</option>
                <option value="aw">Apple Watch</option>
            </select>
        </div>
    );
}
export default ProductSelect;