
import { createRouter , createWebHistory } from 'vue-router'

const requireAuth = (to, from, next) => {
  if (to.meta.auth) {
    const token = sessionStorage.getItem('myToken');
    if (token) {
      next();
    } else {
      next({path:'/login'});
    }
  } else {
    next();
  }
}

const oauthSuccess = (to, from, next) => {
  next();
}

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/HomePage.vue'),
    meta: {
      keepAlive: false,// 不需要缓存
      auth: false
    }, 
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/HomePage.vue'),
    meta: {
      keepAlive: false, // 不需要缓存
      auth: false
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('@/components/ShopCart.vue'),
    meta: {
      keepAlive: false, // 不需要缓存
      auth: true
    },
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/components/LoginPage.vue'),
    meta: {
      keepAlive: false, // 不需要缓存
      auth: false
    },
    beforeEnter: requireAuth
  },
  {
    path: '/user',
    name: 'user',
    component: ()=> import('@/components/CustomerPage.vue'),
    meta: {
      keepAlive: false, // 不需要缓存
      auth: true
    },
    beforeEnter: requireAuth
  },
  {
    path: '/oauth2/success',
    name: 'oauth2',
    component: ()=> import('@/components/HomePage.vue'),
    meta: {
      keepAlive: false, // 不需要缓存
      auth: false
    },
    beforeEnter: oauthSuccess
  }
  // Add more routes here   http://localhost:8080/oauth2/success
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router