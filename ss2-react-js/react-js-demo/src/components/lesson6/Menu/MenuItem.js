function MenuItem({ menu, setSelectedMenu }) {
  return (
    <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {menu.map((item) => (
        <button key={item.id} onClick={() => setSelectedMenu(item)}>
          {item.name}
        </button>
      ))}
    </nav>
  );
}

export default MenuItem;
