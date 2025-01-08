// Import thư viện cucumber-html-reporter
const reporter = require('cucumber-html-reporter');

// Cấu hình báo cáo
const options = {
  theme: 'bootstrap',  // Chọn theme cho báo cáo (có thể chọn các theme khác như 'simple', 'bootstrap', 'foundation', ...)
  jsonFile: 'reports/cucumber-report.json', // Đường dẫn đến file JSON báo cáo Cucumber
  output: 'reports/cucumber-report.html', // Đường dẫn để lưu báo cáo HTML
  reportSuiteAsScenarios: true,  // Đảm bảo mỗi scenario được báo cáo như một phần của suite
  launchReport: true,  // Mở báo cáo trong trình duyệt sau khi tạo (có thể set false nếu không muốn)
  metadata: {
    "App Version": "1.0.0",  // Thêm thông tin metadata vào báo cáo (tuỳ chọn)
    "Test Environment": "Staging",  // Thêm môi trường test vào báo cáo (tuỳ chọn)
    "Browser": "Chrome",  // Thêm thông tin trình duyệt
    "Platform": "Windows",  // Thêm thông tin nền tảng hệ điều hành
    "Executed": "Remote"  // Thêm thông tin phương thức thực thi test
  }
};

// Tạo báo cáo HTML
reporter.generate(options);
