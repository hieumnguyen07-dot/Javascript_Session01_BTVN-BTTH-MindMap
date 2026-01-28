let nameBook = prompt("Tên sách : ");
let authorName = prompt("Tên tác giả : ");
let yearPublication = Number(prompt("Năm xuất bản : "));
let currentYear = new Date() .getFullYear();
let price = Number(prompt("Giá tiền 1 cuốn : "));
let quantityImported = Number(prompt("Số lượng nhập kho : "));
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let randomNum = Math.floor(Math.random() * 10) + 1;
let authorNameSlice = authorName.slice(0, 3);
let bookID = authorNameSlice.trim().toUpperCase() + yearPublication + "-" + randomNumber;
let ageBook = currentYear - yearOfPublication;
let total = price * quantityImported;

console.log("--- PHIẾU NHẬP KHO ---");
console.log(
    `
    Mã sách : ${bookID}
    Tên sách : ${nameBook}
    Tác giả : ${authorName.toUpperCase()}
    Năm xuất bản : ${yearPublication}
    Tuổi sách : ${ageBook}
    Tổng giá trị : ${total} VNĐ
    Ngăn kệ gợi ý : Kệ số ${randomNum}
`);