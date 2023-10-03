<template>
  <nav class="flex justify-between py-10">
    <div class="flex">
      <router-link to="/">
      <img src="/assets/bloc.png" alt="bloc question quote mario"
        class="transform hover:-translate-y-2 transition-transform duration-300 ease-in-out w-10 h-10 md:w-14 md:h-14">
      </router-link>
      <h1 class="hidden xs:block pl-4 self-center font-bold uppercase tracking-wider text-1xl md:text-2xl">
        Quiz with a vue
      </h1>
    </div>
    <div class="self-center">
      <router-link to="/about">
        <img src="/assets/bloc_grey.jpeg" alt="bloc question quote mario"
        class="transform hover:rotate-180 transition-transform duration-1000 ease-in-out w-8 h-8 md:w-10 md:h-10">
      </router-link>
    </div>
  </nav>
</template>

<script setup>

</script>