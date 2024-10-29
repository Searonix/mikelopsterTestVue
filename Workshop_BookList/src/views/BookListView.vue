<script setup>
// นำเข้า useBookStore จาก '@/stores/book' เพื่อใช้งาน store สำหรับข้อมูลหนังสือ
import { useBookStore } from '@/stores/book';
// นำเข้า RouterLink จาก 'vue-router' เพื่อสร้างลิงก์สำหรับการนำทางในแอปพลิเคชัน
import { RouterLink } from 'vue-router';
// สร้าง instance ของ bookStore โดยเรียกใช้ useBookStore ซึ่งจะทำให้เราสามารถเข้าถึงข้อมูลหนังสือและฟังก์ชันที่เกี่ยวข้องได้
const bookStore = useBookStore();
</script>

<template>
    <!-- ส่วนหัวของหน้า Book List View -->
    Book List View
    <div>
        <!-- ลิงก์ไปยังหน้าสร้างหนังสือใหม่ โดยกำหนด route name เป็น 'book-create' -->
        <RouterLink :to="{ name: 'book-create' }">
            Create book
        </RouterLink>
        
        <!-- แสดงรายการหนังสือทั้งหมดจาก bookStore.books -->
        <ul>
            <!-- ใช้ v-for เพื่อวนลูปแสดงข้อมูลหนังสือแต่ละรายการ โดยมี book เป็นตัวแทนของหนังสือแต่ละเล่ม และ index เป็นลำดับของหนังสือในอาร์เรย์ -->
            <li v-for="(book, index) in bookStore.books">
                <!-- แสดงข้อมูลของหนังสือ ประกอบด้วยลำดับหนังสือ (index), ชื่อหนังสือ (book.name) และชื่อผู้เขียน (book.author) -->
                {{ index }} {{ book.name }} {{ book.author }}
                
                <!-- ปุ่ม Edit ที่ลิงก์ไปยังหน้าที่ใช้แก้ไขหนังสือเล่มนั้นๆ โดยใช้ route name 'book-edit' และส่ง index เป็น parameter 'id' -->
                <RouterLink :to="{ name: 'book-edit', params: { id: index } }">
                    <button>Edit</button>
                </RouterLink>
                
                <!-- ปุ่ม Delete ที่เรียกใช้ฟังก์ชัน removeBook ของ bookStore เพื่อลบหนังสือออกจากรายการ โดยส่ง index ของหนังสือที่ต้องการลบ -->
                <button @click="bookStore.removeBook(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>
