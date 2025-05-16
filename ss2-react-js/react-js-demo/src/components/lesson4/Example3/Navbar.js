function Navbar(props) {
    return (
        <nav className="navbar">
            <ul>
                {props.link.map(item => (
                    <li >
                            {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navbar;