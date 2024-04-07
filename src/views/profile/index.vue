<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
const profileOptions = [
  { id: 'payment', text: 'Payments & Cards', icon: 'fa-regular fa-credit-card' },
  { id: 'settings', text: 'Settings', icon: 'fa-regular fa-gear' },
  { id: 'messages', text: 'Messages', icon: 'fa-regular fa-envelope' },
  { id: 'logout', text: 'Logout', danger: true, icon: 'fa-regular fa-arrow-right-from-bracket' }
]
const auth = useAuthStore()
const router = useRouter()

const handleListItemClick = async(option) => {
  switch (option) {
    case 'logout':
      auth.logout()
      await router.push({ name: 'Login' })
      break;
  }

}
</script>

<template>
  <div class="">
    <div class="m-4 flex-col space-y-2 rounded-lg bg-white px-4 shadow">
      <div class="flex items-center justify-center gap-x-2 py-4">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white"
        >
          RV
        </div>
        <div class="flex-grow">
          <p class="text-sm font-medium">
            {{ auth.userData.user_metadata.full_name }}
          </p>
          <p class="text-sm text-gray-800">{{ auth.userData.email }}</p>
        </div>
        <div>
          <p class="text-sm font-medium uppercase text-orange-600 hover:bg-orange-200">edit</p>
        </div>
      </div>

      <div class="flex border-t border-gray-200 pb-2 pt-2">
        <p class="flex-grow text-sm text-green-600">Local hero III</p>
        <p class="text-sm text-gray-700">Member since June 2024</p>
      </div>
    </div>

    <div class="mb-4 grid grid-cols-3 gap-x-6 px-4">
      <div class="flex-col justify-center rounded-xl bg-white p-2 text-center shadow">
        <i class="fa-regular fa-heart text-lg text-orange-500"></i>
        <p class="text-sm text-orange-500">Favorites</p>
      </div>
      <div class="flex-col justify-center rounded-xl bg-white p-2 text-center shadow">
        <i class="fa-regular fa-bag-shopping text-lg text-orange-500"></i>
        <p class="text-sm text-orange-500">Orders</p>
      </div>
      <div class="flex-col justify-center rounded-xl bg-white p-2 text-center shadow">
        <i class="fa-regular fa-circle-yen text-lg text-orange-500"></i>
        <p class="text-sm text-orange-500">399 Points</p>
      </div>
    </div>

    <div class="divide-y divide-gray-200">
      <div
        v-for="(item, index) in profileOptions"
        :key="index"
        class="w-full bg-white text-gray-900"
      >
        <button
          @click="handleListItemClick(item.id)"
          type="button"
          :class="[
            item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-900 hover:bg-gray-100 ',
            'flex w-full items-center px-4 py-3 text-sm focus:z-10'
          ]"
        >
          <i :class="`${item.icon} pr-2`"></i>
          {{ item.text }}
        </button>
      </div>
    </div>

    <div class="pt-4 text-center text-xs text-gray-400">
      &copy; All Rights Reserved, Better Together 2024
    </div>
  </div>
</template>

<style scoped></style>
