import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/UserLogin.vue'),
    },
    {
      path: '/teacher',
      name: 'teacher',
      children: [
        {
          path: 'materials',
          component: import('../views/teacher/TeacherMaterial.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
  ],
})

export default router
