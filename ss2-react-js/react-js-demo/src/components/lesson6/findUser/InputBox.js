import { useState } from "react";
import SearchBar from "./SearchBar";
function InputBox() {
    const [users] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
        { id: 4, name: "Smith" },
        { id: 5, name: "Emily" },
        { id: 6, name: "Michael" },
        { id: 7, name: "Sarah" },
        { id: 8, name: "David" },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const findUser = (value) => {
        setSearchTerm(value);
    };
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <>
            <h1>Find User</h1>
            <SearchBar onSearchChange={findUser} value={searchTerm} />
            <div className="user-list">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="user-item">
                        {user.name}
                    </div>
                ))}
            </div>
        </>
    );

}
export default InputBox;