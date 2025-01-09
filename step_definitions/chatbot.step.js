const { Given, When, Then, setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');  // Sử dụng expect và chromium từ Playwright
const axios = require('axios');

// Thiết lập timeout mặc định cho tất cả các bước
setDefaultTimeout(60000);  // 60 giây

let response;
let chatData;
let browser;
let page;

console.log("Step definitions loaded successfully!");  // Thêm dòng log này

// Khởi tạo Playwright browser và page
Before(async () => {
  browser = await chromium.launch();  // Khởi tạo trình duyệt
  page = await browser.newPage();  // Tạo trang mới
});

After(async () => {
  await browser.close();  // Đóng trình duyệt sau khi tất cả các test đã thực thi
});

Given('I have a valid chat id and message', () => {
  // Thiết lập dữ liệu cần thiết cho request
  chatData = {
    chat_id: "123456789",  // Giá trị chat_id thực tế của bạn
    message: "Khách sạn sai gon"
  };
});

When('I send a POST request to the chatbot API', async () => {
  try {
    // Gửi POST request với axios
    response = await axios.post('https://ai.ebk.vn/api/v1/tripgo-hotel/chat/stream', chatData, {
      headers: {
        'sitekey': 'MTAwNTthYTdlMTBlYS0yZDE2LTQ1ZDMtODBmNC1jYWQ3ZDcxYzAzYTc=',
        'Content-Type': 'application/json'
      },
      timeout: 60000  // Timeout 60 giây
    });
  } catch (error) {
    // Chụp ảnh màn hình khi có lỗi
    await page.screenshot({ path: 'path/to/screenshots/error-screenshot.png' });
    // In lỗi nếu có và dừng thực thi test nếu có lỗi
    console.log('Error sending request:', error);
    throw new Error('Request failed: ' + error.message);
  }
});

Then('I should receive a status code 200', async () => {
  try {
    // Kiểm tra mã trạng thái HTTP, đảm bảo response không undefined
    expect(response).toBeDefined();  // Kiểm tra response có tồn tại
    expect(response.status).toBe(200);  // Kiểm tra mã trạng thái trả về là 200
  } catch (error) {
    // Chụp ảnh màn hình nếu test thất bại
    await page.screenshot({ path: 'path/to/screenshots/failed-scenario.png' });
    throw error;  // Ném lại lỗi sau khi đã chụp ảnh màn hình
  }
});

