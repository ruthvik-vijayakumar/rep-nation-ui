<script setup>
import { supabase } from '@/util/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
const router = useRouter()
const handleFormSubmit = (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const formData = [...data.entries()]
  signInWithEmail(formData[0][1], formData[1][1])
}

const loginAlert = ref(false)
const loginAlertInfo = ref('')
const auth = useAuthStore()

async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    loginAlertInfo.value = error
    loginAlert.value = true
    setTimeout(() => {
      loginAlert.value = false
    }, 1500)
  } else {
    auth.userData = data.user
    auth.sessionData = data.session
    auth.isAuthenticated = true
    await router.push({ name: 'Home' })
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <a
        href="#"
        class="flex-col items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="h-52 w-52" src="@/assets/true_love.svg" alt="logo" />
      </a>
      <div
        class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
      >
        <div class="space-y-4 p-6">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
          >
            Sign in to your account
          </h1>

          <div
            v-if="loginAlert"
            class="mb-4 flex items-center rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              class="me-3 inline h-4 w-4 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
              />
            </svg>
            <span class="sr-only">Info</span>
            <div>{{ loginAlertInfo }}</div>
          </div>

          <form class="space-y-4 md:space-y-6" @submit="handleFormSubmit">
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-600 focus:ring-orange-600"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-600 focus:ring-orange-600"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-orange-300 dark:focus:ring-orange-600"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Sign in
            </button>
            <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <RouterLink
                :to="{ name: 'Register' }"
                class="font-medium text-orange-600 hover:underline dark:text-orange-500"
                >Sign up</RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
