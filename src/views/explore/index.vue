<script setup>
import NavBar from '@/views/home/NavBar.vue'
import SellerList from '@/views/explore/SellerList.vue'
import FilterPane from '@/components/FilterPane.vue'
</script>

<template>
  <div class="flex-col space-y-2">
    <div class="px-4 pt-4">
      <NavBar />
      <FilterPane />
    </div>
    <SellerList />
  </div>
</template>

<style scoped></style>
