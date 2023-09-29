<template>
  <div class="px-20 font-Roboto tracking-wide leading-relaxed min-h-screen text-gray-700 bg-custom-green">
    <header>
      <NavApp />
    </header>


    <main>
      <Welcome @continue="hideWelcome" v-if="displayWelcome" />
      <QuizComponent v-else />
    </main>


    <RouterView />

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavApp from "./components/NavApp.vue";
import Welcome from './components/Welcome.vue';
import QuizComponent from './components/QuizComponent.vue';
import { ref } from 'vue'

const displayWelcome = ref(true);

function hideWelcome() {
  displayWelcome.value = false;
}

</script>

<style lang="scss" scoped></style>