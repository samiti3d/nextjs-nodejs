# เว็บ Next.js รับข้อมูลผ่าน Endpoint 
 เทคโนโลยีที่ใช้ node + next/reactjs

##หลักการสำคัญ
1. จ่ายข้อมูล json จาก database ผ่าน node.js ที่อยู่ใน folder ที่ชื่อ server

script จะรันตามข้อมูลด้านล่าง...เวลาสร้าง localhost:3000

  ```javascript
  "scripts": {
    "dev": "node server/index.js",
   }
  ```
2. folder ชื่อ actions/index.js ทำหน้าที่ฟังชั่นใช้งานกับหน้าต่างๆ เช่น อยากดึงก็ import { getPosts } from '../actions' แล้ว map ข้อมูลปกติ
3. next.js สะดวกเวลารับพารามิเตอร์บน url  

    ```javascript
    static async getInitialProps({ query }) {
           const movie = await getMoviesById(query.id)
           return { movie }
    }
    ```

