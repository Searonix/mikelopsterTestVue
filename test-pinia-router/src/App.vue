<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

