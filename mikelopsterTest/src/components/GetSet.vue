<script setup>
import { ref, computed } from 'vue'
const priceUSD = ref(1)
const exchangeRate = 35

const priceTHB = computed({
  get: () => priceUSD.value * exchangeRate,
  set: (newValue) => {
    priceUSD.value = (newValue / exchangeRate)
  }
})
</script>

<template>
  <div>
    Price in USD <input type="number" v-model="priceUSD">
    Price in THB <input type="number" v-model="priceTHB">
    <p>Price in USD: ${{ priceUSD }}</p>
    <p>Price in THB: {{ priceTHB }}฿</p>
  </div>
</template>


<!-- มี 2 รูปแบบหลักในการเรียกใช้ computed properties
Simple Computed Property (แบบอ่านอย่างเดียว): computed(() => {...})
Computed Property with Getter and Setter (แบบอ่านและเขียนได้): computed({ get: ..., set: ... }) -->