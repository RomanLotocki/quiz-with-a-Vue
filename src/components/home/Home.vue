<template>
  <EnterName @continue="hideWelcome" v-if="displayUserInput" />
  <SelectQuiz v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EnterName from '@/components/home/EnterName.vue';
import SelectQuiz from '@/components/home/SelectQuiz.vue';
import { useUsersStore } from '@/stores/users';

const displayUserInput = ref();

//store variables
const store = useUsersStore();
const userName = store.userName;

onMounted(() => {
  userName != null ? displayUserInput.value = false : displayUserInput.value = true;
});

function hideWelcome() {
  displayUserInput.value = false;
};

</script>