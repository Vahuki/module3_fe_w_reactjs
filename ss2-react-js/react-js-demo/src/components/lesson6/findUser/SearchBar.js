function SearchBar({onSearchChange}){
   const handleSubmit = (e) => { 
        e.preventDefault(); // Ngăn reload
        // const inputValue = e.target.elements.searchInput.value; // Lấy value từ ô input
        // if (onSearchChange) {
        //     onSearchChange(inputValue); // Gọi hàm cha truyền xuống
        // }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="searchInput" // Quan trọng để lấy từ e.target.elements
            placeholder="Search for a user..." 
            onChange={(e)=>onSearchChange(e.target.value)}
            />
            <input type="submit" value={"Search"}/>
        </form>
    );
}
export default SearchBar;