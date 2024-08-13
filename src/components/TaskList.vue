<!-- src/components/TaskList.vue -->
<template>
    <div>
      <h1>Task List</h1>
      <ul>
        <li v-for="task in tasks" :key="task._id">{{ task.title }}</li>
      </ul>
      <TaskForm />
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import TaskForm from './TaskForm.vue';
  
  export default {
    components: { TaskForm },
    computed: {
      ...mapState(['tasks']),
    },
    created() {
      this.fetchTasks();
    },
    methods: {
      ...mapActions(['fetchTasks']),
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles for the task list component */
  </style>
  