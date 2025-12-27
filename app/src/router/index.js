import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import BlogPage from '../views/BlogPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'food+ 食之味 - 專為熟齡設計的營養專家' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: '關於我們 - food+ 食之味' }
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
    meta: { title: '產品介紹 - food+ 食之味' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: { title: '健康專欄 - food+ 食之味' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: '聯絡我們 - food+ 食之味' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 更新頁面標題
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'food+ 食之味'
  next()
})

export default router
