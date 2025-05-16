function LoginStatus(prop){
    return (
        <div>
            <p>{prop.isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</p>
        </div>
    );

}
export default LoginStatus;