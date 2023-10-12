<template>
    <SurvivalQuiz />
   </template>
   
   <script setup>
   import SurvivalQuiz from '@/components/quiz/SurvivalQuiz.vue';
   import { onUnmounted, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useQuizStore } from '@/stores/quiz.js';
import { useRouter } from 'vue-router';

//store variables
const storeQuiz = useQuizStore();
const store = useUsersStore();
const userName = store.userName;

// Router instance
const router = useRouter();

// Handle redirection to home page if there is no userName registered
onMounted(() => {
  if (userName === null) {
    router.push({ name: 'home' });
  }
});

onUnmounted(() => {
  storeQuiz.$reset()
})
   </script>