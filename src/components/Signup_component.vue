<!-- src/components/Signup.vue -->
<template>
    <div>
      <h1>Signup</h1>
      <form @submit.prevent="signup">
        <div>
          <label for="username">Username</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" id="confirmPassword" type="password" required />
        </div>
        <button @click="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      ...mapActions(['signup']),
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles for the signup component */
  </style>
  