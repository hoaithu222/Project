/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Chế độ JIT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đường dẫn tới các file của bạn
  ],
  theme: {
    extend: {}, // Tùy chỉnh theme nếu cần
  },
  plugins: [], // Thêm plugin Tailwind nếu cần
};
