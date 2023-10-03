<template>
  <div class="px-20 font-Roboto tracking-wide leading-relaxed min-h-screen text-gray-700 bg-custom-green">

    <header>
      <NavApp />
    </header>

    <main>
      <RouterView />
    </main>
    
  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';
import NavApp from "./components/NavApp.vue";

</script>
