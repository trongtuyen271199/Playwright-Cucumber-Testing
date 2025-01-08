const { Before, After } = require('@cucumber/cucumber');

Before(function () {
  // Thiết lập hoặc khởi tạo trước mỗi kịch bản kiểm thử
  console.log('Before scenario');
});

After(function () {
  // Xử lý sau mỗi kịch bản kiểm thử
  console.log('After scenario');
});
