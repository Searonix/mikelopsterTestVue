<script setup>
import Counter from './Counter.vue'    
import { ref } from 'vue'

const currentMessage = ref('Hello')

// สร้าง function changeMessage เข้ามา
const changeMessage = (newMessage) => {
  currentMessage.value = newMessage
}
</script>
<template>
    <div>
        <h1>Here is a child component!</h1>
        <Counter
            :message='currentMessage'
            :changeMessage='changeMessage'
        />
    </div>
</template>