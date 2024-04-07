<script setup>
import SellerCard from '@/views/explore/SellerCard.vue'
import SellerMap from '@/views/explore/SellerMap.vue'
import { ref } from 'vue'

const mapToggle = ref(false)

const handleToggleChange = () => {
  mapToggle.value = !mapToggle.value
}
</script>

<template>
  <div class="flex items-center px-4">
    <div class="flex-grow py-2 text-sm font-medium text-gray-800">20 places nearby</div>
    <div>
      <label class="inline-flex cursor-pointer items-center">
        <span class="mr-2 text-sm text-gray-900">List</span>
        <input
          type="checkbox"
          :value="mapToggle"
          class="peer sr-only"
          @change="handleToggleChange"
        />
        <div
          class="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"
        />
        <span class="ml-2 text-sm text-gray-900">Map</span>
      </label>
    </div>
  </div>

  <div v-if="!mapToggle" class="flex-col space-y-3 px-4 pb-12 pt-4">
    <SellerCard :id="i" v-for="i in 20" :partner="i % 3 === 0" :key="i" />
    <p class="text-center text-xs text-gray-700">That's all folks</p>
  </div>

  <div v-else>
    <SellerMap />
  </div>
</template>

<style scoped></style>
