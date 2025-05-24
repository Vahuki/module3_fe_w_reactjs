import { useState } from "react";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
    const [listRegister, setlistRegister] = useState([])
    const addUser = ({ username, email }) => {
        setlistRegister([...listRegister, { username, email }])
    }
    return (
        <>
            <RegisterForm onLogin={addUser} />
            <ul>
                {listRegister.map((user, index) => (
                    <li key={index}>
                        Username: {user.username} - Email: {user.email}
                    </li>
                ))}
            </ul>

        </>
    );

}
export default RegisterPage;