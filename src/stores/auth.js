import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuthenticated = ref(false)
    const userData = ref({})
    const sessionData = ref({})
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }
    const logout = () => {
      isAuthenticated.value = false
      userData.value = {}
      sessionData.value = {}
    }
    const workoutMap = ref({})
    return { isAuthenticated, userData, sessionData, logout, workoutMap }
  },
  { persist: true }
)
