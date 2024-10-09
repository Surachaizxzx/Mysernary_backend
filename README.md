ในส่วนของ frontend ผมใช้ดังนี้
  library ให้พิมพ์ npm i มันจะทำการติดตั้งไฟล์ที่จำเป็นจาก package.json
  ซึ่งผมdeployบน vercel เเยกส่วน deploy กับ backend คือ คนละโดเมน
  ขั้นเเรกการติดตั้ง เเค่ clone ไฟล์ จาก git เเล้ว พิมพ์ npm i เเล้ว npm start ได้เลย
  เเต่ถ้า จะอัพขึ้น server เช่น vercel ต้องทำ vercel.json  ก็ใช้ได้เลย 

  ซึ่งผมใช้ react ในการ เขียน อาจจะมีบัค คือ ผมใช้ React Router คือ React Router  บน Vercel เวลา รีเฟรชจะเจอข้อผิดพลาด "Not Found" มันเป็นเพราะเกิดจากการที่ server ไม่รู้จัก route นั้น เพราะการใช้ React Router จะทำให้การ routing ถูกจัดการที่ฝั่ง client โดย JavaScript และเมื่อทำการรีเฟรชหน้าหรือเข้า URL โดยตรงใน browser, server จะพยายามหาหน้าเว็บที่มีอยู่จริง ซึ่งไม่มีอยู่จริงใน server ครับ เเต่ option ได้หมดเลย