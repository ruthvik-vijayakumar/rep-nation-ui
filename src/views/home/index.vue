<script>
import NavBar from '@/views/home/NavBar.vue'
import Carousel from '@/views/home/Carousel.vue'
import ActivityFeed from '@/views/home/ActivityFeed.vue'

export default {
  components: { ActivityFeed, Carousel, NavBar }
}
</script>

<template>
  <div class="relative px-4 pt-4">
    <div class="flex-col space-y-3">
      <NavBar />
      <div class="bg-white shadow border border-gray-200 rounded-xl">
        <div class="flex-col relative">
          <img class="absolute h-24 w-24 left-4" src="@/assets/images/rewards.png" alt="">
          <div class="px-4 py-6 flex flex-col justify-end items-end">
          <p class="text-green-600">Level 7</p>
          <p class="text-4xl font-bold text-green-600">DIAMOND</p>
          </div>

          <div class="w-full bg-gray-200 h-0.5">
            <div class="bg-green-600 h-0.5" style="width: 60%"></div>
          </div>
          <div class="grid grid-cols-3 items-center divide-x divide-green-200 text-green-600">
            <div class="text-center p-2 bg-gray-50">
              <p class="font-semibold">2K</p>
              <p class="text-sm">Calories</p>
            </div>
            <div class="text-center p-2 bg-gray-50">
              <p class="font-semibold">12K</p>
              <p class="text-sm">Steps</p>
            </div>
            <div class="text-center p-2 bg-gray-50">
              <p class="font-semibold">230</p>
              <p class="text-sm">Heart Points</p>
            </div>
          </div>
        </div>
      </div>
<!--      <Carousel />-->
<!--      <hr class="h-px border-0 bg-gray-200" />-->
      <ActivityFeed />
    </div>
  </div>
</template>

<style scoped></style>
