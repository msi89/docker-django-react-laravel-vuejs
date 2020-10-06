import { createApp } from 'vue'
import App from './App.vue'
import { serviceWorker } from './registerServiceWorker'
import router from './router'
import store from './store'

// serviceWorker.start()

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
