// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    auth: {
      isAuthenticated: !!localStorage.getItem('token'),
      token: localStorage.getItem('token') || '',
    },
    tasks: [],
  },
  mutations: {
    setAuth(state, payload) {
      state.auth.isAuthenticated = payload.isAuthenticated;
      state.auth.token = payload.token;
      if (payload.isAuthenticated) {
        localStorage.setItem('token', payload.token);
      } else {
        localStorage.removeItem('token');
      }
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('https://{#task-tracker-backend-1.onrender.com#}localhost:3000/auth/login', credentials);
        commit('setAuth', { isAuthenticated: true, token: response.data.token });
      } catch (error) {
        console.error(error);
      }
    },
    async signup(credentials) {
      try {
        await axios.post('https://{#task-tracker-backend-1.onrender.com#}localhost:3000/auth/signup', credentials);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('https://{#task-tracker-backend-1.onrender.com#}localhost:3000/tasks', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        commit('setTasks', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addTask({ commit }, task) {
      try {
        const response = await axios.post('https://{#task-tracker-backend-1.onrender.com#}localhost:3000/tasks', task, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        commit('addTask', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    logout({ commit }) {
      commit('setAuth', { isAuthenticated: false, token: '' });
    },
  },
});

export default store;
