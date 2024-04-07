<script setup>
import { supabase } from '@/util/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleFormSubmit = (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const formData = [...data.entries()]
  signUpNewUser(formData[0][1], formData[1][1], formData[2][1])
}

async function signUpNewUser(full_name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'localhost:5173/auth/login',
      data: {
        full_name
      }
    }
  })
  console.log(full_name, email, password)
  if (data) await router.push({ name: 'Login' })
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto flex flex-col items-center justify-center px-6 py-6 md:h-screen lg:py-0">
      <a
        href="#"
        class="flex-col items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="h-52 w-52" src="@/assets/true_love.svg" alt="logo" />
      </a>
      <div
        class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
      >
        <div class="space-y-2 p-6">
          <h1
            class="text-center text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit="handleFormSubmit">
            <div>
              <label
                for="full_name"
                class="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                >Full Name</label
              >
              <input
                type="text"
                name="full_name"
                id="full_name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                placeholder="Johnny Appleseed"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                class="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label for="password" class="mb-1 block text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                required=""
              />
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-orange-300 dark:focus:ring-orange-600"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">
                  I accept the
                  <a class="font-medium text-orange-600 hover:underline" href="#"
                    >Terms and Conditions</a
                  >
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Create an account
            </button>
            <p class="text-center text-sm font-light text-gray-700">
              Already have an account?
              <RouterLink
                :to="{ name: 'Login' }"
                class="font-medium text-orange-600 hover:underline"
                >Login here
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
