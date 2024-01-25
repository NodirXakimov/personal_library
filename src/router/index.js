import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/books-card',
      name: 'books-card',
      component: () => import('../views/BooksCardView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/integration-sent-requests',
      name:'integration-sent-requests',
      component: () => import('../views/SentRequestsView.vue')
    },
    {
      path: '/async-components',
      name:'async-components',
      component: () => import('../views/AsyncComponents.vue')
    },
  ]
})

export default router
