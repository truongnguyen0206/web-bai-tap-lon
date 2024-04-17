$(document).ready(function() {
    displayCart();

    function displayCart() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var cartTable = $("#cart-items");
        cartTable.empty();
        var totalPrice = 0;

        $.each(cartItems, function(index, item) {
            var total = item.gia * item.soLuong;
            totalPrice += total;
            var row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.ten}</td>
                    <td>${item.gia}</td>
                    <td>${item.soLuong}</td>
                    <td>${total}</td>
                    <td><button onclick="removeItem(${index})">Xóa</button></td>
                </tr>
            `;
            cartTable.append(row);
        });

        $("#total-price").text(`Tổng tiền: ${totalPrice} VND`);
    }

    window.removeItem = function(index) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCart();
    }
    $("#checkout-btn").click(function() {
        window.location.href = "thanhtoan.html"; // Chuyển hướng sang trang thanh toán
    });
});
