function LoginForm({ onLogin}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    if (onLogin) {
      onLogin({username, password});
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;