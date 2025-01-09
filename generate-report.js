// Import thư viện cucumber-html-reporter
const reporter = require('cucumber-html-reporter');
const fs = require('fs');

// Cấu hình báo cáo
const options = {
  theme: 'bootstrap',  // Chọn theme cho báo cáo (có thể chọn các theme khác như 'simple', 'bootstrap', 'foundation', ...)
  jsonFile: 'reports/cucumber-report.json',  // Đường dẫn đến file JSON báo cáo Cucumber
  output: 'reports/cucumber-report.html',  // Đường dẫn để lưu báo cáo HTML
  reportSuiteAsScenarios: true,  // Đảm bảo mỗi scenario được báo cáo như một phần của suite
  launchReport: true,  // Mở báo cáo trong trình duyệt sau khi tạo (có thể set false nếu không muốn)
  metadata: {
    "App Version": "1.0.0",  // Thêm thông tin metadata vào báo cáo
    "Test Environment": "Staging",  // Thêm môi trường test vào báo cáo
    "Browser": "Chrome",  // Thêm thông tin trình duyệt
    "Platform": "Windows",  // Thêm thông tin nền tảng hệ điều hành
    "Executed": "Remote"  // Thêm thông tin phương thức thực thi test
  },
  customCss: 'path/to/custom-style.css',  // Thêm đường dẫn tới tệp CSS tùy chỉnh
  screenshotsDirectory: 'path/to/screenshots',  // Đường dẫn tới thư mục chứa ảnh chụp màn hình
  customData: {
    "Tester": "John Doe",  // Thêm thông tin người thực hiện test
    "Execution Time": new Date().toLocaleString(),  // Thêm thời gian thực thi
  },
};

// Thêm thông báo khi tạo báo cáo
try {
  reporter.generate(options);
  console.log("Report generated successfully!");
} catch (error) {
  console.error("Error generating report: ", error);
}
