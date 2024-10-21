<template>
    <div>
        <div class="container">
            <div class="shoeData">
                <div class="">Fullname: {{ fullname }}</div>
                <div class="">Email: {{ email }}</div>
            </div>
            <div class="">
                <div class="">Firstname:</div>
                <input type="text" v-model="firstname">
                <div class="errors">{{ errors.firstname }}</div>
            </div>

            <div class="">
                <div class="">Lastname:</div>
                <input type="text" v-model="lastname">
                <div class="errors">{{ errors.lastname }}</div>
            </div>
            <div class="">
                <div class="">Email:</div>
                <input type="email" v-model="email">
                <div class="errors">{{ errors.email }}</div>
            </div>

            <div class="loading" v-if="isLoading">
                Loading...
            </div>
            <button :disabled="!isValid || isLoading" @click="updateProfile">Update profile</button>
            <div class="isUpdated" v-if="isUpdated">
                Profile update เรียบร้อย
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'

export default {
    setup() {
        const firstname = ref('')
        const lastname = ref('')
        const email = ref('')

        const isLoading = ref(false)
        const isUpdated = ref(false)
        const isValid = ref(true)
        const errors = ref({})

        const fullname = computed(() => {
            return `${firstname.value} ${lastname.value}`
        })

        const updateProfile = async () => {
            isLoading.value = true
            // Simulating API call
            await (new Promise(resolve => setTimeout(resolve, 2000)))
            isLoading.value = false
            isUpdated.value = true
        }

        const validateName = (name) => {
            const re = /\d/
            return !re.test(name) && name !== ''
        }

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
            return re.test(email)
        }

        watch([firstname, lastname, email], () => {
            isValid.value = true
            isUpdated.value = false
            errors.value = {}

            if (!validateName(firstname.value)) {
                isValid.value = false
                errors.value.firstname = 'ชื่อจริงไม่ถูกต้อง'
            }

            if (!validateName(lastname.value)) {
                isValid.value = false
                errors.value.lastname = 'นามสกุลไม่ถูกต้อง'
            }

            if (!validateEmail(email.value)) {
                isValid.value = false
                errors.value.email = 'emailไม่ถูกต้อง'
            }
        })

        onMounted(() => {
            firstname.value = 'test'
            lastname.value = 'lama'
            email.value = 'test1234@gmail.com'
        })

        return {
            firstname,
            lastname,
            email,
            isLoading,
            isUpdated,
            isValid,
            errors,
            fullname,
            updateProfile
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 320px;
    margin: 0 auto;
}

.container>div {
    width: 100%;
}

.shoeData {
    margin-bottom: 20px;
}

input {
    width: 100%;
}

.loading {
    background-color: azure;
    width: 100%;
    height: 18%;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px 0;
}

button {
    margin-top: 20px;
    width: 100%;
    height: 26px;
}

.errors {
    color: red;
    font-weight: bold;
}

.isUpdated {
    margin-top: 2%;
    color: rgb(63, 212, 44);
    font-weight: bold;
    text-align: center;
    background: rgb(224, 255, 249);
    padding: 20px 0;
}
</style>