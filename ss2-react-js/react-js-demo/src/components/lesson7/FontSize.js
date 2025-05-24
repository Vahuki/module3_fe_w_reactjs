import { useState } from "react";

function FontSize() {
    const [size, setSize] = useState(16)
    
    const change = (value) => {
        setSize(size + value);
    }
    return (
        <div style={{ fontSize: size + "px", height: "100vh", padding: "20px" }}>
            <button onClick={()=>change(1)} disabled={size===100} >+</button>
            <button onClick={()=>change(-1)} disabled={size===10}>-</button>
            <div style={{textAlign:"center"}}>{size + "px"}</div>
            <p>1. Bộ lọc sản phẩm theo danh mục
                🎯 Mục tiêu:
                Sinh viên thực hành lọc dữ liệu dựa trên tương tác từ component con.
                🔧 Yêu cầu:
                Product: Chứa danh sách sản phẩm (có name, category).


                FilterPanel: Hiển thị danh sách danh mục (category).


                ProductList: Hiển thị các sản phẩm đã lọc.


                Khi chọn danh mục trong FilterPanel, danh sách sản phẩm trong ProductList thay đổi tương ứng.



                2. Chọn màu nền
                🎯 Mục tiêu:
                Sinh viên truyền dữ liệu từ con lên cha để điều khiển giao diện.
                🔧 Yêu cầu:
                Color: Quản lý màu nền của trang.


                ColorPicker: Hiển thị các nút màu (đỏ, xanh, vàng, v.v).


                Khi click nút màu trong ColorPicker, truyền lên Color để thay đổi màu nền toàn trang.




                3. Tùy chỉnh cỡ chữ
                🎯 Mục tiêu:
                Sinh viên thực hành thao tác điều khiển UI từ component con.
                🔧 Yêu cầu:
                FontSize: Quản lý kích cỡ chữ (fontSize).


                FontControl: Có nút Tăng / Giảm. Tối đa là 100px và tối thiểu là 10px


                Content: Hiển thị đoạn văn bản với kích cỡ chữ hiện tại.


                Khi click nút, kích cỡ chữ được cập nhật tương ứng.




                4. Tìm kiếm thành phố
                🎯 Mục tiêu:
                Sinh viên sử dụng input để lọc và hiển thị dữ liệu theo từ khóa.
                🔧 Yêu cầu:
                City: Quản lý danh sách thành phố (cố định).


                SearchInput: Nhập từ khóa.


                CityList: Hiển thị danh sách phù hợp.


                Từ khóa nhập → truyền lên App → lọc danh sách.


                5. Theo dõi hoạt động người dùng
                🎯 Mục tiêu:
                Ghi nhận và hiển thị các hành động do người dùng thực hiện.
                🔧 Yêu cầu:
                Action: Quản lý lịch sử hoạt động (log).


                ActionPanel: Có các nút hành động: Đăng nhập, Xem trang, Đăng xuất…


                LogViewer: Hiển thị danh sách các hành động đã thực hiện.


                Mỗi khi bấm nút → sự kiện được gửi về App và thêm vào log.




            </p>
        </div>
    );
}
export default FontSize;