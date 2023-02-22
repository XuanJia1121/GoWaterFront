
import { createRouter , createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/HomePage.vue'),
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/HomePage.vue'),
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('@/components/ShopCart.vue'),
    meta: {
      keepAlive: false // 不需要缓存
    }
  }
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router