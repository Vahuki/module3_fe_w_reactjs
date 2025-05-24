import React from "react";
import SeachBox from "./SearchBox";
const Search = () => {
    const Product = ["Iphone", "Ipad", "Macbook", "Airpod", "Apple Watch", "Apple TV", "Apple Pencil", "Apple Music", "Apple Arcade"];

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredProducts = Product.filter((product) =>
            product.toLowerCase().includes(searchValue)
        );
        console.log("Kq tim duoc la: ",filteredProducts);
    }
    return (
        <div>
            <h2>Search Box</h2>
            <SeachBox handleSearch={handleSearch} />
        </div>
    );
}
export default Search;