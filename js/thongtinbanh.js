$(document).ready(function() {
    $(".them").click(function() {
        var soLuong = parseInt($("#soLuongInput").val());
        var tenSanPham = $("#cakeName").text();
        var giaSanPham = parseInt($("#cakeGia").text());

        var sanPham = {
            ten: tenSanPham,
            gia: giaSanPham,
            soLuong: soLuong
        };

        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(sanPham);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
    $(document).ready(function() {
        $(".mua").click(function() {
            window.location.href = "thanhtoan.html";
        });
    });
});

