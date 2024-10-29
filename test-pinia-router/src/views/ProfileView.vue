<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const isUpdated = ref(true)
const firstname = ref('')
const lastname = ref('')

// onMounted(() => {
//     console.log('params', route.params);
//     console.log('query', route.query);
    
// })
const backToHome = ()  => {
    router.push({ name: 'home' })
}

onMounted(() => {
    firstname.value = userStore.firstname
    lastname.value = userStore.lastname
})

watch([firstname, lastname], (newData) => {
    if (newData[0] !== userStore.firstname || 
        newData[1] !== userStore.lastname) {
        isUpdated.value = false
    }
})


const updateProfile = () => {
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    userStore.changeName(formData)

}
</script>

<template>
    <div>
        Profile from stores
        <div v-if="isUpdated" style="color: red;"> Profile up to date</div>
        <div>Firstname: {{ userStore.firstname }}</div>
        <div>Lastname: {{ userStore.lastname }}</div>
    </div>
    <div>
        Profile Vue
    </div>
    <div>Firstname: <input type="text" v-model="firstname" name="" id=""></div>
    <div>Lastname: <input type="text" v-model="lastname" name="" id=""></div>
    <button @click="updateProfile()">Update profile</button>
    <div>
        <RouterLink :to="{ name: 'home' }"><button>
                Back to Home
        </button></RouterLink>
    </div>
    <div>
        <button @click="backToHome()">Like Back to Home</button>
    </div>
</template>