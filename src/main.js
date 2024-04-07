import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'

import '@/util'

import VuePlyr from '@skjnldsv/vue-plyr'
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

import piniaPluginPersistedState from 'pinia-plugin-persistedstate'



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.use(VuePlyr, {
  plyr: {}
})
app.use(pinia)
app.use(PortalVue)
app.use(router)

app.mount('#app')
