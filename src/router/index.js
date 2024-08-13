// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login_component.vue';
import Signup from '../components/Signup_component.vue';
import TaskList from '../components/TaskList.vue';
import store from '@/store';

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const loggedIn = store.state.auth.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
