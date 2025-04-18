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
      path: '/sep',
      name: 'sep',
      children: [
        {
          path: 'usicamm',
          component: () => import('../views/sep/UsicammPage.vue'),
        },
        {
          path: 'SepNews',
          component: () => import('../views/sep/SepNews.vue'),
        }
      ]
    },
    {
      path: '/teacher',
      name: 'teacher',
      children: [
        {
          path: 'materials',
          component: () => import('../views/teacher/TeacherMaterial.vue'),
        },
        {
          path: 'courses',
          component: () => import('../views/teacher/TeacherCourses.vue'),
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
