<template>
  <div class="px-20 font-Roboto tracking-wide leading-relaxed min-h-screen text-gray-700 bg-custom-green">

    <header>
      <NavApp />
    </header>

    <main>
      <RouterView />
    </main>
    
    <footer class="flex-col py-10 font-light text-sm text-center">
      <div>
        <RouterLink to="/" class="p-2 hover:font-semibold">Accueil</RouterLink>
        <span class="p-2">|</span>
        <RouterLink to="/about" class="p-2 hover:font-semibold">A propos</RouterLink>
        <span class="p-2">|</span>
        <a href="https://github.com/RomanLotocki/quiz-with-a-Vue" target="_blank" class="p-2"><font-awesome-icon :icon="['fab', 'github']" class="fa-xl" style="color: #05386B;" /></a>
        <a href="https://www.linkedin.com/in/roman-lotocki/" target="_blank" class="p-2"><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-xl" style="color: #05386B;" /></a>
        

      </div>
      
      <div class="mx-auto my-3 border-t max-w-4xl"></div>
    
      <p>© 2023 Roman Lotocki powered by Vue.js</p>
    </footer>
  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';
import NavApp from "./components/NavApp.vue";

</script>
