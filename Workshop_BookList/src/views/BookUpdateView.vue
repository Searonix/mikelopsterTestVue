<script setup>
// นำเข้า useBookStore จาก '@/stores/book' เพื่อใช้งาน store สำหรับข้อมูลหนังสือ
import { useBookStore } from '@/stores/book';
// นำเข้า ref, reactive, onMounted, computed จาก 'vue' สำหรับจัดการกับ state และ lifecycle hooks
import { ref, reactive, onMounted, computed } from 'vue';
// นำเข้า useRoute และ useRouter จาก 'vue-router' เพื่อจัดการเส้นทางในแอปพลิเคชัน
import { useRoute, useRouter } from 'vue-router';

// ใช้ useRoute เพื่อเข้าถึงข้อมูลเส้นทางปัจจุบัน
const route = useRoute();
// ใช้ useRouter เพื่อเข้าถึงฟังก์ชันการนำทาง
const router = useRouter();
// สร้าง instance ของ bookStore เพื่อใช้งาน store ที่จัดการข้อมูลหนังสือ
const bookStore = useBookStore();

// ข้อมูลหนังสือที่จะแสดงหรือแก้ไข โดยใช้ reactive เพื่อให้ Vue ติดตามการเปลี่ยนแปลง
const bookData = reactive({
    name: 'Book name', // ชื่อหนังสือเริ่มต้น
    author: 'Lomnuer' // ชื่อผู้เขียนเริ่มต้น
});

// ตัวแปรสำหรับเก็บโหมด ('create' หรือ 'update') และ index ของหนังสือที่กำลังแก้ไข
const mode = ref('create'); // กำหนดโหมดเริ่มต้นเป็น 'create'
const bookIndex = ref(-1); // กำหนดค่าเริ่มต้นสำหรับ index เป็น -1 (ไม่ระบุ)

// ทำงานเมื่อ component เริ่มต้น
onMounted(() => {
    // ตรวจสอบว่ากำลังอยู่ในหน้าแก้ไขหรือไม่ 
    if (route.name === 'book-edit') {
        mode.value = 'update'; // เปลี่ยนโหมดเป็น 'update'
        bookIndex.value = parseInt(route.params.id); // รับค่า index ของหนังสือจาก parameters
        
        // โหลดข้อมูลหนังสือที่ต้องการแก้ไขจาก store
        const cBookStore = bookStore.books[bookIndex.value]; // ดึงข้อมูลหนังสือที่ต้องการแก้ไข
        if (cBookStore) { // ตรวจสอบว่ามีข้อมูลหนังสือหรือไม่
            bookData.name = cBookStore.name; // ตั้งค่าชื่อหนังสือตามข้อมูลที่โหลดมา
            bookData.author = cBookStore.author; // ตั้งค่าชื่อผู้เขียนตามข้อมูลที่โหลดมา
        }
    }
});

// ฟังก์ชันสำหรับเพิ่มหรืออัพเดตข้อมูลหนังสือ
const addBook = () => {
    // ถ้าโหมดเป็น 'update' ให้เรียกใช้ฟังก์ชัน editBook จาก store
    if (mode.value === 'update') {
        bookStore.editBook(bookData, bookIndex.value);
    } else { // ถ้าเป็นโหมด 'create' ให้เรียกใช้ฟังก์ชัน addBook จาก store
        bookStore.addBook(bookData);
    }

    // นำพาไปยังหน้ารายการหนังสือ
    router.push({
        name: 'book-list' // เปลี่ยนเส้นทางไปยัง 'book-list'
    });
};

// คำนวณปุ่มที่จะแสดง ('Add' หรือ 'Update') ตามโหมด
const displayButton = computed(() => (mode.value === 'create' ? 'Add' : 'Update')); // ใช้ computed เพื่อเปลี่ยนข้อความบนปุ่มตามโหมด
</script>

<template>
    <div>
        <!-- แสดงหัวข้อที่แตกต่างกันตามโหมด -->
        <h2>{{ mode === 'create' ? 'Add Book' : 'Edit Book' }}</h2>
        <div>
            Book name
            <!-- ช่องกรอกชื่อหนังสือ โดยใช้ v-model เชื่อมโยงกับ bookData.name -->
            <input type="text" v-model="bookData.name">
        </div>
        <div>
            Book author
            <!-- ช่องกรอกชื่อผู้เขียน โดยใช้ v-model เชื่อมโยงกับ bookData.author -->
            <input type="text" v-model="bookData.author">
        </div>
        <!-- ปุ่มสำหรับเพิ่มหรือแก้ไขหนังสือ -->
        <button @click="addBook">{{ displayButton }} Book</button>
        <div>
            <!-- ลิงก์กลับไปยังหน้ารายการหนังสือ -->
            <RouterLink :to="{ name: 'book-list' }">
                Back to home
            </RouterLink>
        </div>
    </div>
</template>
