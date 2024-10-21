<script setup>
import { ref, computed } from 'vue';

const firstname = ref('John');
const lastname = ref('Doe');

// fullname จะถูกแคชไว้และจะไม่คำนวณซ้ำ หาก firstname หรือ lastname ไม่เปลี่ยนแปลง
const fullname = computed(() => {
  console.log('Calculating fullname...');
  return `${firstname.value} ${lastname.value}`;
});
</script>

<template>
  <div>
    <p>{{ fullname }}</p> <!-- จะเรียกใช้ fullname ที่ถูกแคช -->
    <button @click="firstname = 'Jane'">Change Firstname</button>
  </div>
</template>
