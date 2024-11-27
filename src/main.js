import { createApp } from 'vue'
import router from './router'
import pinia from './stores'
import App from './App.vue'

import "./assets/css/index.css"

// createApp(App).mount('#app')
createApp(App).use(router).use(pinia).mount('#app')