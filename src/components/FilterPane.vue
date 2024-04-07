<script setup>
// import { Drawer } from 'flowbite'
// import { onMounted, ref } from 'vue'

/*
 * $targetEl (required)
 * options (optional)
 * instanceOptions (optional)
 */
// const drawerRef = ref(null)
// let drawer
//
// const options = {
//   placement: 'right',
//   backdrop: true,
//   bodyScrolling: false,
//   edge: false,
//   edgeOffset: '',
//   backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
//   onHide: () => {
//     console.log('drawer is hidden')
//   },
//   onShow: () => {
//     console.log('drawer is shown')
//   },
//   onToggle: () => {
//     console.log('drawer has been toggled')
//   }
// }
//
// onMounted(() => {
//   drawer = new Drawer(drawerRef.value, options, {
//     id: 'drawer-bottom-example',
//     override: true
//   })
// })
//
// const handleFilterClick = () => {
//   drawer
// }
import { Dropdown } from 'flowbite'
import { computed, onMounted, reactive, ref, watch } from 'vue'

let trigger = ref(null)
let target = ref(null)

let selectedCategory = reactive([])
let selectedBudget = ref([])
const categoryList = ['Urban', 'Romantic', "Editor's Pick", 'Hot']

watch(selectedBudget, (newVal) => {
  console.log(newVal)
})
let dropdown

onMounted(() => {
  dropdown = new Dropdown(
    target.value,
    trigger.value,
    {
      placement: 'bottom-start',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      onHide: () => {
        console.log('dropdown has been hidden')
      },
      onShow: () => {
        console.log('dropdown has been shown')
      },
      onToggle: () => {
        console.log('dropdown has been toggled')
      }
    },
    {}
  )
})

const handleBudgetApply = () => {
  dropdown.hide()
}

const handleFilterCategoryClick = (category) => {
  if (selectedCategory.includes(category)) {
    let idx = selectedCategory.findIndex((x) => x === category)
    selectedCategory.splice(idx, 1)
  } else selectedCategory.push(category)
}

const isCategorySelected = (val) => {
  return selectedCategory.includes(val)
}
</script>

<template>
  <div
    class="filter-container mt-2 grid w-full auto-cols-max grid-flow-col gap-x-2 overflow-x-scroll"
  >
    <div>
      <button
        ref="trigger"
        class="flex w-full items-center justify-center rounded-full bg-white px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
        id="menu-button"
      >
        Budget <i class="fa-regular fa-chevron-down ml-1 text-xs"></i>
      </button>
      <div
        ref="target"
        class="z-10 ml-3 hidden divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white pb-2 pr-4 shadow"
      >
        <ul
          class="space-y-3 p-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="menu-button"
        >
          <li v-for="(i, index) in ['$', '$$', '$$$', '$$$$']" :key="i">
            <div class="flex items-center">
              <input
                :id="`budget-${index + 1}`"
                :name="`budget-${index + 1}`"
                v-model="selectedBudget"
                type="checkbox"
                :value="index + 1"
                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-orange-600 focus:ring-2 focus:ring-orange-500"
              />
              <label :for="`budget-${index + 1}`" class="ms-2 text-sm text-gray-900">
                {{ i }}
              </label>
            </div>
          </li>
        </ul>

        <div>
          <button
            type="button"
            @click="handleBudgetApply"
            class="mx-2 w-full rounded-lg bg-orange-500 px-5 py-1.5 text-sm text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Apply
          </button>
        </div>
      </div>
    </div>

    <div>
      <button
        type="button"
        @click="handleFilterClick"
        class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        data-drawer-target="drawer-bottom-example"
        data-drawer-show="drawer-bottom-example"
        data-drawer-placement="bottom"
        aria-controls="drawer-bottom-example"
      >
        <i class="fa-solid fa-sliders mr-1 text-gray-600"></i>Filters
      </button>
    </div>

    <div class="filter-pills flex items-center gap-x-2">
      <div v-for="(category, index) in categoryList" :key="index">
        <button
          type="button"
          @click="handleFilterCategoryClick(category)"
          :class="[
            isCategorySelected(category)
              ? 'bg-orange-50 ring-orange-500 hover:bg-orange-100'
              : 'bg-white ring-gray-200 hover:bg-gray-50',
            'inline-flex w-full items-center justify-center gap-x-1.5 rounded-full  px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset '
          ]"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>

  <!-- drawer component -->
  <!--  <div-->
  <!--    id="drawer-bottom-example"-->
  <!--    ref="filter-drawer"-->
  <!--    class="fixed bottom-0 left-0 right-0 w-full p-4 overflow-y-auto transition-transform bg-white transform-none"-->
  <!--    style="z-index: 80"-->
  <!--    tabindex="-1"-->
  <!--    aria-labelledby="drawer-bottom-label"-->
  <!--    data-drawer-backdrop="true"-->
  <!--  >-->
  <!--    <h5-->
  <!--      id="drawer-bottom-label"-->
  <!--      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500"-->
  <!--    >-->
  <!--      <svg-->
  <!--        class="w-4 h-4 me-2.5"-->
  <!--        aria-hidden="true"-->
  <!--        xmlns="http://www.w3.org/2000/svg"-->
  <!--        fill="currentColor"-->
  <!--        viewBox="0 0 20 20"-->
  <!--      >-->
  <!--        <path-->
  <!--          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"-->
  <!--        /></svg-->
  <!--      >Bottom drawer-->
  <!--    </h5>-->
  <!--    <button-->
  <!--      type="button"-->
  <!--      data-drawer-hide="drawer-bottom-example"-->
  <!--      aria-controls="drawer-bottom-example"-->
  <!--      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"-->
  <!--    >-->
  <!--      <svg-->
  <!--        class="w-3 h-3"-->
  <!--        aria-hidden="true"-->
  <!--        xmlns="http://www.w3.org/2000/svg"-->
  <!--        fill="none"-->
  <!--        viewBox="0 0 14 14"-->
  <!--      >-->
  <!--        <path-->
  <!--          stroke="currentColor"-->
  <!--          stroke-linecap="round"-->
  <!--          stroke-linejoin="round"-->
  <!--          stroke-width="2"-->
  <!--          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"-->
  <!--        />-->
  <!--      </svg>-->
  <!--      <span class="sr-only">Close menu</span>-->
  <!--    </button>-->
  <!--    <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">-->
  <!--      Supercharge your hiring by taking advantage of our-->
  <!--      <a href="#" class="text-orange-600 underline font-medium dark:text-orange-500 hover:no-underline"-->
  <!--        >limited-time sale</a-->
  <!--      >-->
  <!--      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1-->
  <!--      design job board.-->
  <!--    </p>-->
  <!--    <a-->
  <!--      href="#"-->
  <!--      class="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"-->
  <!--      >Learn more</a-->
  <!--    >-->
  <!--    <a-->
  <!--      href="#"-->
  <!--      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"-->
  <!--      >Get access-->
  <!--      <svg-->
  <!--        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"-->
  <!--        aria-hidden="true"-->
  <!--        xmlns="http://www.w3.org/2000/svg"-->
  <!--        fill="none"-->
  <!--        viewBox="0 0 14 10"-->
  <!--      >-->
  <!--        <path-->
  <!--          stroke="currentColor"-->
  <!--          stroke-linecap="round"-->
  <!--          stroke-linejoin="round"-->
  <!--          stroke-width="2"-->
  <!--          d="M1 5h12m0 0L9 1m4 4L9 9"-->
  <!--        /></svg-->
  <!--    ></a>-->
  <!--  </div>-->
</template>

<style scoped>
.filter-container {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.filter-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
