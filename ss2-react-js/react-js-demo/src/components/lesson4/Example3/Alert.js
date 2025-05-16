function Alert(prop) {
    // Định nghĩa màu nền theo type
    let bgColor;
    switch (prop.type) {
        case "success":
            bgColor = "#d4edda";
            break;
        case "warning":
            bgColor = "#fff3cd";
            break;
        case "error":
            bgColor = "#f8d7da";
            break;
        default:
            bgColor = "#f1f1f1";
    }

    const style = {
        backgroundColor: bgColor,
        padding: "12px 16px",
        borderRadius: "4px",
        margin: "8px 0",
        color: "#333",
        border: "1px solid #ccc"
    };

    return (
        <div style={style}>
            {prop.message}
        </div>
    );
}

export default Alert;