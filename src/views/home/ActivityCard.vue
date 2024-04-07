<script setup>
import { useRouter } from 'vue-router'

defineProps({
  id: Number
})
const router = useRouter()

const handleActivityClick = () => {
  router.push({ name: 'DealDetail', params: { id: '1' } })
}

const handleLikeClick = () => {
  console.log('Like button clicked')
}
</script>

<template>
  <div class="relative">
    <div class="absolute right-2 top-2 z-20" @click="handleLikeClick">
      <i class="fa-regular fa-heart text-white"></i>
    </div>

    <div
      class="relative max-w-sm rounded-lg border border-gray-200 bg-white shadow"
      @click="handleActivityClick"
    >
      <div class="relative h-36 rounded-t-lg">
        <div class="absolute h-full w-full bg-gradient-to-t from-black"></div>

        <div
          class="h-full w-full rounded-t-lg"
          :style="{ background: `url(https://picsum.photos/600/350?v=${id})` }"
        />
        <div class="absolute bottom-2 left-3 flex w-full">
          <h5 class="text-lg font-bold tracking-tight text-white">Noteworthy technology</h5>
        </div>

        <div class="absolute bottom-2 right-3 flex items-center">
          <i class="fa-solid fa-circle-heart text-green-500"></i
          ><span class="ml-0.5 text-sm text-white">1.1K</span>
        </div>
      </div>

      <div class="p-3">
        <div class="flex justify-between text-xs">
          <p class="text-xs text-gray-700">Arlington's picks, Romantic, Grubhub</p>
          <p class="text-green-700">$$$</p>
        </div>
        <!--        <div class="text-xs text-gray-600 py-2">-->
        <!--          <p>-->
        <!--            The love is in the air, as you visit the best romantic spots to make your day worth it-->
        <!--            for you.-->
        <!--          </p>-->
        <!--        </div>-->

        <div class="inline-flex gap-x-2 py-2">
          <div class="rounded-full bg-gray-200 px-2.5 py-1 text-xs">
            <i class="fa-regular fa-layer-group"></i> Bundle deal
          </div>
          <div class="rounded-full bg-gray-200 px-2.5 py-1 text-xs">
            <i class="fa-solid fa-star-of-life"></i> Local Collab deal
          </div>
        </div>
        <a
          v-if="id % 3 === 0"
          href="#"
          class="inline-flex w-full rounded-lg bg-green-500 px-3 py-2 text-xs font-medium text-white"
        >
          <div class="flex-grow">
            <i class="fa-solid fa-badge-percent mr-1 text-white"></i>
            <span>Flat 10% off on your first booking</span>
          </div>
          <div>+2 more</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
