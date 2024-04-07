<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const playerOptions = {
  hideControls: false,
  controls: ['play-large']
}

const handleClickOverlay = (e) => {
  console.log(e)
  e.stopPropagation()
}

const handleClickBack = (e) => {
  router.back()
}
</script>
<template>
  <div class="relative h-screen w-full overflow-y-scroll">
    <div class="relative">
      <div
        class="absolute left-0 top-0 z-10 ml-2 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-30"
        @click="handleClickBack"
      >
        <i class="fa-regular fa-arrow-left text-white"></i>
      </div>

      <vue-plyr :options="playerOptions">
        <video
          controls
          crossorigin
          playsinline
          src="https://videos.pexels.com/video-files/20315562/20315562-hd_1920_1080_30fps.mp4"
          data-poster="poster.jpg"
        />
      </vue-plyr>
    </div>

    <div class="px-4 pb-28 pt-4">
      <div class="mb-3 flex-col space-y-2">
        <div class="flex w-full items-center justify-between">
          <h5 class="text-lg font-bold tracking-tight text-gray-800">Noteworthy technology</h5>
          <div class="flex items-center">
            <i class="fa-solid fa-circle-heart text-green-500"></i
            ><span class="ml-0.5 text-sm text-gray-800">1.1K</span>
          </div>
        </div>

        <div class="flex justify-between text-xs">
          <p class="text-sm text-gray-700">Arlington's picks, Romantic, Grubhub</p>
          <p class="text-green-700">$$$</p>
        </div>

        <div class="text-sm text-gray-600">
          <p>
            The love is in the air, as you visit the best romantic spots to make your day worth it
            for you.
          </p>
        </div>

        <div class="inline-flex gap-x-2">
          <div class="rounded-full bg-gray-200 px-2.5 py-1 text-xs">
            <i class="fa-regular fa-layer-group"></i> Bundle deal
          </div>
          <div class="rounded-full bg-gray-200 px-2.5 py-1 text-xs">
            <i class="fa-solid fa-star-of-life"></i> Local Collab deal
          </div>
        </div>
        <a
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

      <ol class="relative border-s border-gray-200">
        <li class="mb-4 ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">February 2022</time>
          <h3 class="text-base font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-sm font-normal text-gray-500">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board,
            calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >Learn more
            <svg
              class="ms-2 h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              /></svg
          ></a>
        </li>
        <li class="mb-4 ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
          <h3 class="font-semibold text-gray-900">Marketing UI design in Figma</h3>
          <p class="text-sm font-normal text-gray-500">
            All of the pages and components are first designed in Figma and we keep a parity between
            the two versions even as we update the project.
          </p>
        </li>
        <li class="ms-4">
          <div
            class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >April 2022</time
          >
          <h3 class="font-semibold text-gray-900">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-sm font-normal text-gray-500">
            Get started with dozens of web components and interactive elements built on top of
            Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>


  <div class="h-18 sticky bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white">
    <div class="flex justify-between px-4 py-4 text-gray-800">
      <div class="">
        <p class="text-sm font-semibold">
          $9.89 <span class="ml-1 text-gray-500 line-through">$10</span>
        </p>
        <p class="text-xs">10% discount applied, inc. of taxes</p>
      </div>
      <button class="text-sm rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white">BUY NOW</button>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
