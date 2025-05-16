function Example3() {
    let mystyle = {
        color: "red",
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "Arial"
    };
    const linkElment = (
        <a href="https://youtobe.com" target="_blank" rel="noopener noreferrer">
            Youtobe here
        </a>
    );
  return (
    <div>
      <h2>Example 3</h2>
      <p style={mystyle}>This is an example of a functional component in React.</p>
      {linkElment}
    </div>
  );
}
export default Example3;