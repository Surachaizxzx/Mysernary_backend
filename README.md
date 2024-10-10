ในส่วนของ frontend ผมใช้ดังนี้
  library ให้พิมพ์ npm i มันจะทำการติดตั้งไฟล์ที่จำเป็นจาก package.json
  ซึ่งผมdeployบน vercel เเยกส่วน deploy กับ backend คือ คนละโดเมน
  ขั้นเเรกการติดตั้ง เเค่ clone ไฟล์ จาก git เเล้ว พิมพ์ npm i เเล้ว npm start ได้เลย
  เเต่ถ้า จะอัพขึ้น server เช่น vercel ต้องทำ vercel.json   เเละต้องไปสมัคร บัญชี ของvercel เเล้วจะให้เรา สร้างโปรเจค เเล้วมันจะให้ importจาก git ลงมา
  จากนั้น เข้าไปที่โปรเจคที่เราสร้าง เเล้วเข้าไปที่ setting->General->Build & Development Settings-> Output directory ให้ไส่ build 
  ก็ใช้ได้เลย 
  การยิง req
  ---ใช้ axios ในการยิง ไปที่backend ถ้า deploy backend ใน ที่บริการอื่น จะต้องเเก้ไข url domain ของ backend ที่ ในไฟล์ list.js เเละ Shorturl.js 
  ซึ่งผมใช้ react  ในการ เขียน ตอนนี้ รองรับเเค่ หน้าจอคอมพิวเตอร์นะครับ
  ---ตกเเต่งใช้ canva (สร้างโลโก้)
  ---boostrap 5 
  ---css