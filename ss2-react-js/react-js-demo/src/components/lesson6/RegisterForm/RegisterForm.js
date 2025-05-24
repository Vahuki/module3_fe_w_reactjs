function RegisterForm({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        if (username.trim() != "" && email.trim() != "") {
            onLogin({ username, email });
            e.target.elements.username.value = "";
            e.target.elements.email.value = "";
        }else{
            alert("nhap thong tin!")
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="email">email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <button >Login</button>
        </form>
    );
}
export default RegisterForm;