<script setup>
import { supabase } from '@/util/index.js'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
const auth = useAuthStore()

const router = useRouter()
onMounted(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    let { user, ...sessionData } = session
    auth.isAuthenticated = true
    auth.userData = user
    auth.sessionData = sessionData

    router.push({ name: 'Home' })
  })
  // const {
  //   data: { subscription }
  // } = supabase.auth.onAuthStateChange((_event, session) => {
  //   let { user, ...sessionData } = session
  //   auth.isAuthenticated = true
  //   auth.userData = user
  //   auth.sessionData = sessionData
  // })
})
</script>

<template></template>

<style scoped></style>
