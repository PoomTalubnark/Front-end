🚁 Frontend Drone

Frontend สำหรับระบบ Drone Management — พัฒนาโดยใช้ Next.js (App Router)
ออกแบบมาให้เชื่อมต่อกับ backend API เพื่อแสดงผลข้อมูลการทำงานของโดรน, logs, และการตั้งค่า (config)

🧠 Tech Stack

Framework: Next.js 14+

Language: JavaScript (ES6)

Styling: Global CSS (globals.css)

Build Tool: Node.js

Deployment: Vercel

Package Manager: npm

⚙️ Project Structure
frontend-drone/
├── app/
│   ├── api/
│   │   └── route.js         # Endpoint หรือ API route
│   ├── config/
│   │   └── page.js          # หน้าตั้งค่าระบบ
│   ├── logs/
│   │   └── page.js          # หน้าแสดง logs ของโดรน
│   ├── submit/
│   │   └── page.js          # หน้าส่งข้อมูลหรือฟอร์ม
│   ├── favicon.ico
│   ├── globals.css          # Global styles
│   ├── layout.js            # Layout หลักของแอป
│   └── page.js              # หน้าแรกของเว็บไซต์
├── public/                  # static assets เช่น รูปภาพ
├── .env                     # environment variables
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md

🧩 Installation & Development

Clone โปรเจกต์

git clone https://github.com/yourusername/frontend-drone.git
cd frontend-drone


ติดตั้ง dependencies

npm install


รัน development server

npm run dev


เปิดเบราว์เซอร์ที่

http://localhost:3000

🧱 Build & Start

สำหรับ production build:

npm run build
npm start

☁️ Deployment (Vercel)
วิธีที่ 1: ผ่านเว็บ Vercel

เข้า vercel.com

ล็อกอินด้วย GitHub

Import โปรเจกต์ frontend-drone

กด “Deploy” แล้วรอระบบ build

วิธีที่ 2: ผ่าน CLI
npm install -g vercel
vercel


https://front-end-last-six.vercel.app/

🔧 Environment Variables

สร้างไฟล์ .env ใน root directory แล้วเพิ่มค่าที่ต้องใช้ เช่น:

NEXT_PUBLIC_API_URL=https://back-end-vhmf.onrender.com
