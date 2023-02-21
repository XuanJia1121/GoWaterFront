import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
