let input = prompt("Vui lòng nhập số lượng sách trong thư viện:");
let soLuongSach = Number(input);
if (isNaN(soLuongSach)) {
    console.log("Lỗi: Dữ liệu bạn nhập không phải là một con số.");
} else {
    let ketQua = `Thư viện hiện có '${soLuongSach}' cuốn sách.`;
    
    console.log(ketQua);
    document.write("<h3>" + ketQua + "</h3>");
    }   