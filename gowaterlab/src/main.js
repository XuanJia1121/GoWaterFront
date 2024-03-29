import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from '@/router'
import piniaPluginPersist from 'pinia-plugin-persist'

//jquery
const $ = require('jquery');
window.$ = $;

//pinia
const pinia = createPinia();
pinia.use(piniaPluginPersist);

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
