import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: 'active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: () => import('@/views/BrazilView.vue')
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import('../views/PanamaView.vue')
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import('@/views/JamaicaView.vue')
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import('@/views/HawaiiView.vue')
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/views/DestinationShow.vue'),
      props: route => ({
        id: parseInt(route.params.id)
      })
    }
  ]
})

export default router
