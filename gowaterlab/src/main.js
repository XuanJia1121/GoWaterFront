import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from '@/router'


//jquery
const $ = require('jquery');
window.$ = $;

//pinia
const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
