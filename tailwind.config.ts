import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // مسیر فایل‌هایی که از کلاس‌های Tailwind استفاده می‌کنند
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            customGreen: '#E4EFE7',
          },
    },
  },
  plugins: [
    // پلاگین‌های اضافی
  ],
};

export default config;