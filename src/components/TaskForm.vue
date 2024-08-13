<!-- src/components/TaskForm.vue -->
<template>
    <div>
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <div>
          <label for="title">Title</label>
          <input v-model="title" id="title" type="text" required />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        title: '',
      };
    },
    methods: {
      ...mapActions(['addTask']),
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles for the task form component */
  </style>
  