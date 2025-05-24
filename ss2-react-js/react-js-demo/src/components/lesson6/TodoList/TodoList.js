import { useState } from "react";
import TodoForm from "./TodoForm";


function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (todo.trim() !== "") {
            setTodos([...todos, todo]);
        }
    }
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <TodoForm onAddTodo={addTodo}/>
        </div>
    );
}
export default TodoList;