module.exports = {
  testDir: './tests',  // Thư mục chứa các test case của bạn
  use: {
    headless: false,  // Chạy với UI
  },
  reporter: [['html', { open: 'always' }]],  // Báo cáo HTML sẽ mở tự động
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};
