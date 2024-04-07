<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import ClassNames from 'embla-carousel-class-names'
const [emblaRef] = emblaCarouselVue({}, [ClassNames()])

import { Stories } from 'vue-insta-stories'
import { ref } from 'vue'
const items = [
  {
    url: 'https://videos.pexels.com/video-files/4488004/4488004-hd_1080_1920_25fps.mp4',
    type: 'video'
  },
  {
    url: 'https://videos.pexels.com/video-files/4488003/4488003-hd_1080_1920_25fps.mp4',
    type: 'video'
  },
  {
    url: 'https://file-examples-com.github.io/5mb.mp4',
    type: 'video'
  }
]

const isStoryViewVisible = ref(false)
const handleStoryClick = (story_data) => {
  isStoryViewVisible.value = true
}

const handleStoryEnd = () => {
  isStoryViewVisible.value = false
}
const handleStoryClose = (e) => {
  console.log(e)
  isStoryViewVisible.value = false
}
</script>

<template>
  <div class="embla mt-4">
    <div class="mb-2 text-lg font-bold text-gray-800">Spotlight</div>
    <div class="embla__viewport rounded-xl" ref="emblaRef">
      <div class="embla__container">
        <div
          @click="handleStoryClick({})"
          v-for="index in 5"
          class="embla__slide embla__class-names relative"
          :key="index"
        >
          <div class="embla__slide__img relative">
            <img :src="`https://picsum.photos/600/350?v=${index}`" alt="Your alt text" />
            <div class="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-black"></div>
          </div>
          <div class="absolute bottom-2 left-7 w-full">
            <div class="text-lg font-bold text-white">Hangry Joe's</div>
            <div class="text-xs text-gray-50">Experience hot food like never.</div>
          </div>

          <div
            style="z-index: 1000"
            class="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-green-500"
          >
            <i class="fa-solid fa-circle-play text-xl"></i>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --brand-primary: rgb(47, 112, 193);
  --brand-secondary: rgb(116, 97, 195);
  --brand-alternative: rgb(19, 120, 134);
  --background-site: rgb(249, 249, 249);
  --background-code: rgb(244, 244, 244);
  --text-body: rgb(54, 49, 61);
  --text-comment: rgb(99, 94, 105);
  --text-high-contrast: rgb(49, 49, 49);
  --text-medium-contrast: rgb(99, 94, 105);
  --text-low-contrast: rgb(116, 109, 118);
  --detail-high-contrast: rgb(192, 192, 192);
  --detail-medium-contrast: rgb(234, 234, 234);
  --detail-low-contrast: rgb(240, 240, 242);
  --admonition-note: rgb(46, 109, 188);
  --admonition-warning: rgb(255, 196, 9);
  --admonition-danger: rgb(220, 38, 38);
  --brand-primary-rgb-value: 47, 112, 193;
  --brand-secondary-rgb-value: 116, 97, 195;
  --brand-alternative-rgb-value: 19, 120, 134;
  --background-site-rgb-value: 249, 249, 249;
  --background-code-rgb-value: 244, 244, 244;
  --text-body-rgb-value: 54, 49, 61;
  --text-comment-rgb-value: 99, 94, 105;
  --text-high-contrast-rgb-value: 49, 49, 49;
  --text-medium-contrast-rgb-value: 99, 94, 105;
  --text-low-contrast-rgb-value: 116, 109, 118;
  --detail-high-contrast-rgb-value: 192, 192, 192;
  --detail-medium-contrast-rgb-value: 234, 234, 234;
  --detail-low-contrast-rgb-value: 240, 240, 242;
  --admonition-note-rgb-value: 46, 109, 188;
  --admonition-warning-rgb-value: 255, 196, 9;
  --admonition-danger-rgb-value: 220, 38, 38;
}

.embla {
  max-width: 48rem;
  margin: auto;
  --slide-height: 12rem;
  --slide-spacing: 0.5rem;
  --slide-size: 90%;
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__slide__img > img {
  border-radius: 0.75rem;
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
}

.embla__slide__img {
  border-radius: 0.75rem;
  height: var(--slide-height);
}

.embla__slide__img div {
  border-radius: 0.75rem;
}

.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}
.embla__button {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla__button:disabled {
  color: var(--detail-high-contrast);
}
.embla__button__svg {
  width: 35%;
  height: 35%;
}
.embla__dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
}
.embla__dot {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.embla__dot:after {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  content: '';
}
.embla__dot--selected:after {
  box-shadow: inset 0 0 0 0.2rem var(--text-body);
}
.embla__slide {
  transition: opacity 0.2s ease-in-out;
}
.embla__slide:not(.is-snapped) {
  opacity: 0.65;
}
</style>
