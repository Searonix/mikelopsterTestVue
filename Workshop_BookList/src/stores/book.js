// นำเข้า ref และ computed จาก 'vue' สำหรับการจัดการกับ reactive data
import { ref, computed } from 'vue';
// นำเข้า defineStore จาก 'pinia' เพื่อสร้าง store สำหรับจัดการสถานะในแอปพลิเคชัน
import { defineStore } from 'pinia'

// สร้าง store ชื่อ 'book' โดยใช้ defineStore
export const useBookStore = defineStore('book', {
  // ฟังก์ชัน state ใช้ในการกำหนดค่าเริ่มต้นของ store
  state: () => ({
    // กำหนด state ของ store เป็นอาเรย์ books เพื่อเก็บข้อมูลหนังสือ
    books: [] // เริ่มต้นด้วยอาเรย์ว่าง
  }),
  // ส่วน actions ใช้ในการกำหนดฟังก์ชันที่สามารถเปลี่ยนแปลง state
  actions: {
    // ฟังก์ชันสำหรับเพิ่มหนังสือใหม่ไปยังอาเรย์ books
    addBook(bookData) {
      this.books.push(bookData) // ใช้ push เพื่อเพิ่ม bookData ไปที่ท้ายอาเรย์ books
    },
    // ฟังก์ชันสำหรับลบหนังสือจากอาเรย์ books ตาม index ที่ระบุ
    removeBook(bookIndex) {
      this.books.splice(bookIndex, 1) // ใช้ splice เพื่อลบหนังสือที่ตำแหน่ง bookIndex
    },
    // ฟังก์ชันสำหรับแก้ไขหนังสือในอาเรย์ books ตาม index ที่ระบุ
    editBook(bookData, bookIndex) {
      this.books.splice(bookIndex, 1, bookData) // ใช้ splice เพื่อแทนที่หนังสือที่ตำแหน่ง bookIndex ด้วย bookData ใหม่
    }
  }
})
