import { useState } from "react";

function TodoForm({ onAddTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        if (value.trim() !== "") {
            onAddTodo(value); // Gọi hàm từ cha
            setValue("");     // Clear input
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a new todo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
