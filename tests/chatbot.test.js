// chatbot.test.js (nếu bạn muốn viết các test Playwright thay vì dùng Cucumber)
const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('Send a message to the chatbot and get a 200 status code', async () => {
  const chatData = {
    chat_id: "123456789",
    message: "Khách sạn sai gon"
  };

  let response;

  try {
    response = await axios.post('https://ai.ebk.vn/api/v1/tripgo-hotel/chat/stream', chatData, {
      headers: {
        'sitekey': 'MTAwNTthYTdlMTBlYS0yZDE2LTQ1ZDMtODBmNC1jYWQ3ZDcxYzAzYTc=',
        'Content-Type': 'application/json'
      },
      timeout: 60000
    });

    expect(response.status).toBe(200);
  } catch (error) {
    console.error('Error:', error);
  }
});
