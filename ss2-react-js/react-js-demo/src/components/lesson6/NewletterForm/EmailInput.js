function EmailInput({ email, onChangeEmail }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
      />
    </div>
  );
}
export default EmailInput;