<script setup>
import { onMounted, reactive } from 'vue'
import { initDropdowns } from 'flowbite'
import { Stories } from 'vue-insta-stories'

// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns()
})

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

const goals = reactive([])
const handleGoals = (goal) => {
  let idx = goals.findIndex((x) => x === goal)
  if (idx > 0) goals.splice(idx, 1)
  else goals.push(goal)
}

const isGoalSelected = (goal) => {
  return goals.includes(goal)
}

const level = reactive([])
const handleLevel = (l) => {
  let idx = level.findIndex((x) => x === l)
  if (idx > 0) level.splice(idx, 1)
  else level.push(l)
}

const isLevelSelected = (goal) => {
  return level.includes(goal)
}

const days = reactive([])
const handleDay = (d) => {
  let idx = days.findIndex((x) => x === d)
  if (idx > 0) days.splice(idx, 1)
  else days.push(d)
}

const isDaySelected = (day) => {
  return days.includes(day)
}

const eqp = reactive([])
const handleEq = (d) => {
  let idx = eqp.findIndex((x) => x === d)
  if (idx > 0) eqp.splice(idx, 1)
  else eqp.push(d)
}

const isEqSelected = (eq) => {
  return eqp.includes(eq)
}

const injury = reactive(null)
import VueMarkdown from 'vue-markdown-render'

import { GoogleGenerativeAI } from '@google/generative-ai'
import { useAuthStore } from '@/stores/auth.js'
const loading = ref(false)
const dataMarkdown = ref('')
const auth = useAuthStore()
import { markdown } from 'markdown'
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBokLFUNfDti1Y1JW5NgdefRwMqMXXRM-4')
const handleGenerateWorkoutPlan = async () => {
  loading.value = true
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
  const prompt = `
    You are personal trainer, and you are supposed to generate a workout routine for the following criteria, for 4 weeks

    Fitness Goals - ${goals.join(', ')}

    Fitness Level - ${level.join(', ')}

    Experience and Preferences - ${level.join(', ')} in experience with weight training, cardio, or other forms of exercise

    Time Commitment - ${days.join(', ')}

    Equipment Availability - ${eqp.join(', ')}

    Injuries or Limitations - ${injury}

    Make sure all kinds of training is covered, like weights, cardio, warmup, body weight training among others.

    give me the plan in the form of a table
  `
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  loading.value = false
  dataMarkdown.value = text
  console.log(text)
}
</script>

<template>
  <div>
    <p class="text-lg font-semibold text-gray-800">Your Habits</p>

    <div class="space-y-4 overflow-x-scroll">
      <VueMarkdown :source="dataMarkdown" />
    </div>

    <section class="mt-3 flex-col space-y-3">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="grid gap-4">
          <div class="flex h-full flex-col justify-between rounded-lg bg-blue-100 p-4">
            <img src="@/assets/images/running.png" class="h-16 w-16" alt="running" />
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium">Running</p>
                <p class="text-xs text-gray-600">12,000 steps</p>
              </div>
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-green-600"
              >
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </div>
            </div>
          </div>
          <div class="flex h-full flex-col justify-between rounded-lg bg-yellow-100 p-4">
            <img src="@/assets/images/dumbell.png" class="h-16 w-16" alt="running" />
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium">Workout</p>
                <p class="text-xs text-gray-600">40 min</p>
              </div>
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-green-600"
              >
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </div>
            </div>
          </div>
          <div>
            <div class="flex h-auto flex-col justify-between rounded-lg bg-red-100 p-4">
              <div class="relative flex flex-col justify-between">
                <img src="@/assets/images/healthy-food.png" class="mb-2 h-16 w-16" alt="running" />
                <div class="flex flex-col space-y-1">
                  <p class="text-sm font-medium">Nutrition</p>
                  <p class="text-xs text-gray-600">Track your diet habits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <div class="flex h-full flex-col justify-between rounded-lg bg-gray-100 p-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium">Daily Report</p>
                  <p class="text-xs text-gray-600">12,000 steps</p>
                </div>
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-600"
                >
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div @click="handleStoryClick" class="flex h-auto flex-col justify-between rounded-lg bg-orange-100 p-4">
                <div class="relative flex flex-col justify-between">
                  <img
                    src="@/assets/images/meditation.png"
                    class="mb-2 mt-16 h-16 w-16"
                    alt="running"
                  />
                  <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium">Yoga</p>
                    <p class="text-xs text-gray-600">Breath easy with new meditation routines</p>
                  </div>
                  <div
                    class="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 text-green-600"
                  >
                    <i class="fa-solid fa-play" style="font-size: 8px"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex h-auto flex-col justify-between rounded-lg bg-blue-100 p-4">
              <div class="relative flex flex-col justify-between">
                <img src="@/assets/images/hiking.png" class="mb-2 mt-16 h-16 w-16" alt="running" />
                <div class="flex flex-col space-y-1">
                  <p class="text-sm font-medium">Hiking</p>
                  <p class="text-xs text-gray-600">2 hikes completed</p>
                </div>
                <div
                  class="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 text-green-600"
                >
                  <i class="fa-solid fa-play" style="font-size: 8px"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class="grid gap-4">-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="grid gap-4">-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img-->
        <!--              class="h-auto max-w-full rounded-lg"-->
        <!--              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </section>

    <div class="py-4 text-center text-xs text-gray-500">"That's all folks"</div>

    <div class="group fixed bottom-20 end-6">
      <button
        type="button"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl hover:bg-orange-600"
      >
        <i class="fa-solid fa-sparkles text-2xl"></i>
        <span class="sr-only">Open actions menu</span>
      </button>
    </div>

    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-2xl p-4">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Workout plan</h3>
            <button
              type="button"
              class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                class="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="space-y-4 p-4 md:p-5">
            <p class="text-sm font-medium">Fitness Goals (select all that apply)</p>
            <div class="grid grid-cols-2 text-center shadow-sm">
              <div
                v-for="(x, index) in [
                  'Lose Weight',
                  'Gain Muscle',
                  'Cardio health',
                  'Increase flexibility'
                ]"
                @click="handleGoals(x)"
                :key="index"
                aria-current="page"
                :class="[
                  index === 0 && 'rounded-tl-md',
                  index === 1 && 'rounded-tr-md',
                  index === 2 && 'rounded-bl-md',
                  index === 3 && 'rounded-br-md',
                  isGoalSelected(x)
                    ? 'border border-orange-500 bg-orange-100 text-orange-600'
                    : 'border border-gray-200 bg-white text-gray-800',
                  'px-4 py-2 text-sm font-medium',
                  'focus:z-10'
                ]"
              >
                {{ x }}
              </div>
            </div>

            <p class="text-sm font-medium">Fitness Level</p>

            <div class="inline-flex rounded-md shadow-sm">
              <div
                v-for="(level, index) in ['Beginner', 'Intermediate', 'Advanced']"
                aria-current="page"
                :key="index"
                @click="handleLevel(level)"
                :class="[
                  index === 0 && 'rounded-s-lg',
                  index === 1 && 'border-b border-t',
                  index === 2 && 'rounded-e-lg',
                  isLevelSelected(level)
                    ? 'border-orange-500 bg-orange-100 text-orange-600'
                    : ' border-gray-200 bg-white text-gray-700',
                  'border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10'
                ]"
              >
                {{ level }}
              </div>
            </div>

            <!--            <p>Experienced</p>-->

            <!--            <p>-->
            <!--              Do you have any experience with weight training, cardio, or other forms of exercise?-->
            <!--              Are there any activities you particularly enjoy or dislike? Knowing this helps tailor-->
            <!--              the plan to something you'll find engaging.-->
            <!--            </p>-->

            <p class="text-sm font-medium">Time Commitment</p>
            <!--            <p>-->
            <!--              How many days per week are you realistically able to dedicate to exercise? How much-->
            <!--              time do you have for each workout session?-->
            <!--            </p>-->

            <div
              class="inline-flex shadow-sm"
              v-for="(day, index, len) in [
                { name: 'Monday', code: 'M' },
                { name: 'Tuesday', code: 'Tu' },
                { name: 'Wednesday', code: 'W' },
                { name: 'Thursday', code: 'Th' },
                { name: 'Friday', code: 'F' },
                { name: 'Saturday', code: 'Sa' },
                { name: 'Sunday', code: 'Su' }
              ]"
              aria-current="page"
              :key="index"
              @click="handleDay(day.code)"
              :class="[
                index === 0 && 'rounded-s-lg',
                index > 0 && index < len - 1 && 'border-b border-t',
                index === len - 1 && 'rounded-e-lg',
                isDaySelected(day.code)
                  ? 'border-orange-500 bg-orange-100 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-700',
                'border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10'
              ]"
            >
              {{ day.code }}
            </div>

            <p class="text-sm font-medium">Equipment Availability</p>

            <div class="inline-flex rounded-md shadow-sm">
              <div
                v-for="(eq, index) in ['Gym', 'Equipment', 'No Equipment']"
                aria-current="page"
                :key="index"
                @click="handleEq(eq)"
                :class="[
                  index === 0 && 'rounded-s-lg',
                  index === 1 && 'border-b border-t',
                  index === 2 && 'rounded-e-lg',
                  isEqSelected(eq)
                    ? 'border-orange-500 bg-orange-100 text-orange-600'
                    : ' border-gray-200 bg-white text-gray-700',
                  'border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10'
                ]"
              >
                {{ eq }}
              </div>
            </div>
            <!--            <p>-->
            <!--              Do you have access to a gym, or will you be working out at home? This will influence-->
            <!--              the exercise selection.-->
            <!--            </p>-->

            <p>Injuries or Limitations:</p>
            <textarea
              type="text"
              v-model="injury"
              id="injuries-limitations"
              placeholder="You can type in your injuries and limitations"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <!--            <p>-->
            <!--              Do you have any injuries or limitations that I should be aware of? This is crucial to-->
            <!--              ensure a safe and effective workout plan.-->
            <!--            </p>-->
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5"
          >
            <button
              @click="handleGenerateWorkoutPlan"
              data-modal-hide="default-modal"
              type="button"
              class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate Workout plan
            </button>
          </div>
        </div>
      </div>
    </div>

    <portal to="destination" v-if="isStoryViewVisible">
      <Stories
        :stories="items"
        class="h-100vh w-100vw absolute top-0 h-full w-full"
        style="z-index: 100"
        @allStoriesEnd="handleStoryEnd"
      >
        <template #header="{ story }">
          <div style="z-index: 10000" class="relative flex w-screen items-center gap-x-2">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white"
            >
              YS
            </div>
            <div class="flex-grow text-sm text-white">Yoga Studio</div>
            <div
              @click="handleStoryClose"
              class="absolute right-8 flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-20 text-white"
            >
              <i class="fa-regular fa-xmark text-xl"></i>
            </div>
          </div>
        </template>
      </Stories>
    </portal>
  </div>
</template>

<style scoped></style>
