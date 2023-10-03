import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useUsersStore = defineStore('users', () => {
    const userName = ref(null)
  
    return { userName }
  })