<script setup>
import ClassicQuiz from '@/components/quiz/ClassicQuiz.vue';
import { onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRouter } from 'vue-router';

//store variables
const store = useUsersStore();
const userName = store.userName;

// Router instance
const router = useRouter();

// Fonction pour gérer la redirection
onMounted(() => {
  if (userName === null) {
    // Rediriger vers la vue HomeView lorsque userName est null
    router.push({ name: 'home' }); // Assurez-vous que 'HomeView' correspond au nom de la route de votre vue HomeView
  }
});



</script>

<template>
 <ClassicQuiz v-if="userName !== null"/>
</template>