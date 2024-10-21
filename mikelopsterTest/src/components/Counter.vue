<script setup>
import { ref } from 'vue'

const count = ref(0)
const newMessage = ref('')

defineProps({
  message: String,
  changeMessage: Function
})
</script>

<template>
  <h1>{{ message }}</h1>
  <input type="text" v-model="newMessage">
  <button @click="changeMessage(newMessage)">Change Message</button>
  <div>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>