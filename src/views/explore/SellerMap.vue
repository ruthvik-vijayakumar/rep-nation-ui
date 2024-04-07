<script setup>
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'
mapboxgl.accessToken =
  'pk.eyJ1IjoicnV0aHZpa3ZpamF5YWt1bWFyIiwiYSI6ImNsdWhpOGU5ZzA0cXkyanE4M3BkY2J0MGwifQ.RY6P4Z1K3BLBNaJvFpv7BA'

let map = ref(null)
onMounted(() => {
  new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12', // Replace with your preferred map style
    center: [-71.224518, 42.213995],
    zoom: 9
  })
})
</script>

<template>
  <div ref="map" class="map-container h-screen w-full"></div>
</template>

<style scoped>
.map-container {
  flex: 1;
}
</style>
