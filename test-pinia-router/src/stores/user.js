import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
state: () => ({
  firstname: 'test',
  lastname: 'olala'
}),
actions: {
  changeName (formData) {
    this.firstname = formData.firstname
    this.lastname = formData.lastname
  }
}
})
