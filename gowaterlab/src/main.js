import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//jquery
const $ = require('jquery');
window.$ = $;

//pinia
const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
