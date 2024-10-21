<!-- <script setup>
import { ref, watch } from 'vue'
const message = ref('')
const uppercaseMessage = ref('')

watch(message, (newMessage) => {
  uppercaseMessage.value = newMessage.toUpperCase()
  console.log(`${uppercaseMessage.value}`);
  
})
</script>

<template>
  <div>
    <input type="text" v-model="message">
    <p>Uppercase Message: {{ uppercaseMessage }}</p>
  </div>
</template> -->

<!-- 
watch สามารถ watch ได้ทีละหลายตัวแปรเหมือนกันนะครับ เช่นเคสนี้ เป็นการ watch ตามตัวแปร 2 ตัวคือ x และ y และ

อันที่ 1: นำผลลัพธ์ที่รวมกันออกมาเป็นตัวแปร sum (แต่ก็เป็นแค่ sum ที่ใช้ใน function นั้น)
อันที่ 2: สามารถดูผลลัพธ์ของตัวแปร x, y ที่เปลี่ยนแปลงใหม่ได้ไปพร้อมกัน (newX, newY) -->

<script setup>
import { watch, ref } from 'vue'

const x = ref(0)
const y = ref(0)

// สร้างตัวแปรเพื่อเก็บผลลัพธ์
const sum = ref(0)
const latestX = ref(0)
const latestY = ref(0)

// watch ผลรวมของ x และ y
watch(
    () => Number(x.value) + Number(y.value),
    (newSum) => {
        sum.value = newSum  // อัปเดตค่าผลรวม
    }
)

// watch x และ y แยกกัน
watch([x, y], ([newX, newY]) => {
    latestX.value = newX
    latestY.value = newY
})
</script>

<template>
  <div>
    <div>
      <div>ค่า X: <input type="number" v-model="x" /></div>
      <div>ค่า Y: <input type="number" v-model="y" /></div>
    </div>
    <div>
      <p>ผลรวมของ X และ Y: {{ sum }}</p>
      <p>X ล่าสุด: {{ latestX }}</p>
      <p>Y ล่าสุด: {{ latestY }}</p>
    </div>
  </div>
</template>


<!-- watchEffect -->

<!-- <script setup>
import { reactive, watch } from 'vue'
const formData = reactive({
  firstname: '',
  lastname: ''
})

watch(
  () => formData,
  (newValue, oldValue) => {
    console.log('=== new name', `${newValue.firstname} ${newValue.lastname}`)
  },
  { deep: true }
)
</script>

<template>
  <div>
    <div>
      Firstname <input type="text" v-model="formData.firstname">
    </div>
    <div>
      Lastname <input type="text" v-model="formData.lastname">
    </div>
  </div>
</template> -->
