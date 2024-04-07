import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import ProfileView from '../views/profile/index.vue'
import ExploreView from '../views/explore/index.vue'
import ActivityDetail from '@/views/home/ActivityDetail.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      meta: {
        showNavbar: false
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/deal/:id',
      name: 'DealDetail',
      component: ActivityDetail,
      meta: {
        showNavbar: false
      }
    },
    {
      path: '/explore',
      name: 'Explore',
      component: ExploreView,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/AboutView.vue'),
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
      meta: {
        showNavbar: true
      }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuthStore()
  if (
    // make sure the user is authenticated
    !auth.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login' &&
    to.name !== 'Register'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  } else if(auth.isAuthenticated  && to.name === 'Login' &&
    to.name === 'Register') {
    return { name: '' }

  }
})

export default router
