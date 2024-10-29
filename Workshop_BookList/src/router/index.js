// นำเข้า createRouter และ createWebHistory จาก vue-router สำหรับสร้าง router
import { createRouter, createWebHistory } from 'vue-router'
// นำเข้าคอมโพเนนต์ BookListView และ BookUpdateView จากโฟลเดอร์ views
import BookListView from '../views/BookListView.vue'
import BookUpdateView from '../views/BookUpdateView.vue'

// สร้าง router โดยใช้ createRouter
const router = createRouter({
  // กำหนดประวัติการเข้าชมเว็บด้วย createWebHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  // กำหนด routes ซึ่งเป็นการกำหนดเส้นทางที่ใช้ในแอปพลิเคชัน
  routes: [
    {
      // เส้นทางหลัก '/'
      path: '/',
      // ตั้งชื่อเส้นทางว่า 'book-list'
      name: 'book-list',
      // กำหนดให้ใช้คอมโพเนนต์ BookListView
      component: BookListView
    },
    {
      // เส้นทางสำหรับการสร้างหนังสือ '/book/create'
      path: '/book/create',
      // ตั้งชื่อเส้นทางว่า 'book-create'
      name: 'book-create',
      // กำหนดให้ใช้คอมโพเนนต์ BookUpdateView
      component: BookUpdateView
    },
    {
      // เส้นทางสำหรับการแก้ไขหนังสือ '/book/edit/:id'
      path: '/book/edit/:id',
      // ตั้งชื่อเส้นทางว่า 'book-edit'
      name: 'book-edit',
      // กำหนดให้ใช้คอมโพเนนต์ BookUpdateView
      component: BookUpdateView
    }
  ]
})

// ส่งออก router เพื่อให้สามารถนำไปใช้ในแอปพลิเคชัน
export default router
