import { useState } from "react";
import LoginForm from "./LoginForm";
function LoginSelection() {
    const admin = {
        username: "admin",
        password: "1"
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = ({username,password }) => {
        if (username === admin.username && password === admin.password) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };
    
   
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
            {isLoggedIn ? <h2>Welcome, {admin.username}!</h2> : <h2>Please login</h2>}
        </div>
    );
}
export default LoginSelection;