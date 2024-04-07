<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
const currentRoute = useRoute()

const routerLinks = [
  {
    routeName: 'Home',
    routeText: 'Home',
    icon: 'fa-regular fa-home',
    params: {}
  },
  {
    routeName: 'Explore',
    routeText: 'Events',
    icon: 'fa-regular fa-location-dot',
    params: {}
  },
  {
    routeName: 'Orders',
    routeText: 'Deals',
    icon: 'fa-regular fa-bag-shopping',
    params: {}
  },
  {
    routeName: 'Profile',
    routeText: 'Profile',
    icon: 'fa-regular fa-user',
    params: {}
  }
]
</script>

<template>
  <div class="relative h-screen w-full overflow-y-scroll">
    <RouterView />
    <div class="absolute left-0 top-0 h-48 w-full" style="z-index: -1" />
  </div>
  <div
    v-if="currentRoute.meta['showNavbar']"
    class="sticky bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white"
  >
    <div class="mx-auto grid h-full max-w-lg grid-cols-4">
      <RouterLink
        :to="{ name: route.routeName }"
        v-for="(route, index) in routerLinks"
        :key="index"
        class="inline-flex flex-col items-center justify-center px-5 font-medium hover:bg-gray-100"
      >
        <i :class="`${route.icon} text-lg`"></i>
        <span class="text-xs text-gray-500">{{ route.routeText }}</span>
      </RouterLink>
    </div>
  </div>

  <portal-target name="destination">
    <!--
      This component can be located anywhere in your App.
      The slot content of the above portal component will be rendered here.
      -->
  </portal-target>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.router-link-active,
.router-link-exact-active i {
  @apply text-orange-500;
}

.router-link-active,
.router-link-exact-active span {
  @apply text-orange-500;
}
</style>
