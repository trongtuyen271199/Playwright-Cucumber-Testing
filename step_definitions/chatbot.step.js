const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');  // Thêm dòng này để sử dụng expect

// Thiết lập timeout mặc định cho tất cả các bước
setDefaultTimeout(60000);  // 60 giây

const axios = require('axios');
let response;
let chatData;

Given('I have a valid chat id and message', () => {
  chatData = {
    chat_id: "123456789",  // Giá trị chat_id thực tế của bạn
    message: "Khách sạn sai gon"
  };
});

When('I send a POST request to the chatbot API', async () => {
  try {
    response = await axios.post('https://ai.ebk.vn/api/v1/tripgo-hotel/chat/stream', chatData, {
      headers: {
        'sitekey': 'MTAwNTthYTdlMTBlYS0yZDE2LTQ1ZDMtODBmNC1jYWQ3ZDcxYzAzYTc=',
        'Content-Type': 'application/json'
      },
      timeout: 60000
    });
  } catch (error) {
    console.log('Error sending request:', error);
  }
});

Then('I should receive a status code 200', () => {
  // Kiểm tra mã trạng thái HTTP
  expect(response.status).toBe(200);
});
