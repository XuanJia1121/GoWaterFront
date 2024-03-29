
import { createRouter , createWebHistory } from 'vue-router'

const requireAuth = (to, from, next) => {
  if (to.meta.auth) {
    const token = sessionStorage.getItem('myToken');
    console.log(token);
    if (token) {
      next();
    } else {
      next({path:'/login'});
    }
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/components/LoginPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('@/components/Cart.vue'),
    meta:{
      auth:true
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/order',
    name: 'order',
    component: ()=> import('@/components/OrderList.vue'),
    meta:{
      auth:true
    },
    beforeEnter: requireAuth,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router