// Đặt tên bánh vào thẻ id=cakeName
const params = new URLSearchParams(window.location.search);
const cakeName = params.get('cakeName');
document.getElementById('cakeName').textContent = cakeName;
//------------------------------------------------------------
// Hiển thị hình ảnh trong thẻ <img> với id="cakeImage"
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('imageUrl');
const cakeImageElement = document.getElementById('cakeImage');
cakeImageElement.src = imageUrl;
// Đặt giá bánh vào thẻ id=cakeGia
const params1 = new URLSearchParams(window.location.search);
const cakeGia = params1.get('cakeGia');
document.getElementById('cakeGia').textContent = cakeGia;
//------------------------------------------------------------


