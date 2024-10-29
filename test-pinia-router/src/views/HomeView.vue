<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore} from '../stores/user'

const userStore = useUserStore()


</script>
<template>
  <div>
    Hello Home
    <RouterLink :to="{ name: 'profile-edit', params: { id: 1 }, query: {name: 'test'}}">
      <button>Home</button>
    </RouterLink>
  </div>
  <div>
    <h1>My Profile</h1>
    <p>Firtname: {{ userStore.firstname }}</p>
    <p>Lastname: {{ userStore.lastname }}</p>
  </div>
</template>
