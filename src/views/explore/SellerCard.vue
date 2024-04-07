<script setup>
defineProps({
  id: Number,
  partner: Boolean
})
</script>

<template>
  <div class="flex flex-col">
    <div
      :class="`flex max-w-xl ${!partner ? 'rounded-lg' : 'rounded-t-lg'} border border-gray-200 bg-white shadow hover:bg-gray-100`"
    >
      <img
        :class="`w-24 rounded-none ${!partner ? 'rounded-bl-lg' : ''} rounded-tl-lg object-cover`"
        :src="`https://picsum.photos/600/350?v=${id}`"
        alt=""
      />
      <div class="flex w-full flex-col px-3 py-2 align-baseline">
        <h5 class="mb-1 text-sm font-bold tracking-tight text-gray-900">Hangry Joe's</h5>
        <div class="mb-1 flex w-full items-center gap-x-1 text-xs">
          <div class="flex flex-grow items-center gap-x-1">
            <i class="fa-solid fa-circle-star text-green-500"></i>
            <p class="font-normal text-gray-700">4.3 (10.6k)</p>
          </div>
          <div class="text-green-500">$$$</div>
        </div>
        <div class="flex gap-x-1 text-xs">
          <p class="font-normal text-gray-700">Crystal City Dr</p>
          &bull;
          <p class="font-normal text-gray-700">0.2 mi</p>
        </div>

        <div class="mt-2 flex gap-x-1 text-xs">
          <div
            class="flex items-center gap-x-1 rounded-full bg-gray-200 px-2 py-1 font-normal text-gray-700"
          >
            <i class="fa-regular fa-tag"></i> 2 Deals
          </div>
          <div
            class="flex items-center gap-x-1 rounded-full bg-gray-200 px-2 py-1 font-normal text-gray-700"
          >
            <i class="fa-regular fa-badge-percent"></i> 5 Offers
          </div>
        </div>
      </div>
    </div>

    <div v-if="partner" class="rounded-b-lg bg-gray-100">
      <div class="inline-flex w-full items-center justify-center">
        <hr class="my-3 h-px w-64 border-0 bg-gray-300" />
        <span class="absolute left-1/2 -translate-x-1/2 bg-gray-100 px-3 text-xs text-gray-500">
          has partnered <i class="fa-solid fa-heart text-xs text-red-600"></i> with</span
        >
      </div>

      <div class="m-2 rounded-lg bg-white p-3 shadow">
        <h5 class="mb-1 text-sm font-bold tracking-tight text-gray-900">Hangry Joe's</h5>
        <!--        <div class="mb-1 flex w-full items-center gap-x-1 text-xs">-->
        <!--          <div class="flex flex-grow items-center gap-x-1">-->
        <!--            <i class="fa-solid fa-circle-star text-green-500"></i>-->
        <!--            <p class="font-normal text-gray-700">4.3 (10.6k)</p>-->
        <!--          </div>-->
        <!--          <div class="text-green-500">$$$</div>-->
        <!--        </div>-->
        <div class="flex gap-x-1 text-xs">
          <p class="font-normal text-gray-700">Crystal City Dr</p>
          &bull;
          <p class="font-normal text-gray-700">0.2 mi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
