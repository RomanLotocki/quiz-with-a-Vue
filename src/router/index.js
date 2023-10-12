import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ClassicQuizView from '@/views/ClassicQuizView.vue';
import SurvivalQuizView from '@/views/SurvivalQuizView.vue';
import AboutView from '@/views/AboutView.vue';
import TestView from '@/views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/classic',
      name: 'classicQuiz',
      component: ClassicQuizView
    },
    {
      path: '/survival',
      name: 'survivalQuiz',
      component: SurvivalQuizView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
  ]
})

export default router
