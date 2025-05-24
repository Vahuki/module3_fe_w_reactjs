import { useState } from "react";
import EmailInput from "./EmailInput";
function FormNLT() {
    const [email, setEmail] = useState("");


    const handleChangeEmail = (newEmail) => {
        setEmail(newEmail);
    };


    const handleSubmit = () => {
        alert(`You have subscribed with email: ${email}`);
    }
    return (
        <div>
            <h1>Subscribe to our Newsletter</h1>
            <EmailInput email={email} onChangeEmail={handleChangeEmail} />
            <button onClick={handleSubmit}>Subscribe</button>
        </div>
    );
};

export default FormNLT;