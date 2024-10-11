<script setup>
import { ref } from 'vue'

const searchText = ref('')

</script>

<template>
  <div>{{ searchText }}</div>
  <input v-model="searchText" />
</template>