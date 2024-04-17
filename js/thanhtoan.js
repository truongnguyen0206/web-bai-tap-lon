$(document).ready(function() {
    // Xử lý khi người dùng gửi form thanh toán
    $("#payment-form").submit(function(event) {
        event.preventDefault(); // Ngăn chặn chức năng mặc định của form

        // Lấy thông tin từ form
        var name = $("#name").val();
        var email = $("#email").val();
        var address = $("#address").val();

        // Ở đây bạn có thể thực hiện logic xác nhận thanh toán, ví dụ:
        // Gửi thông tin đến máy chủ, xác nhận đơn hàng, ...

        // Hiển thị modal thông báo thanh toán thành công
        $("#paymentSuccessModal").modal("show");

        // Đặt form về trạng thái ban đầu
        $("#name").val("");
        $("#email").val("");
        $("#address").val("");
    });

    // Xử lý khi người dùng nhấn nút "Đóng" trong modal
    $("#paymentSuccessModal").on("hidden.bs.modal", function () {
        window.location.href = "index.html"; // Chuyển hướng về trang chủ
    });
});
