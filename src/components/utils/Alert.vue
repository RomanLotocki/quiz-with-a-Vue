<template>
    <div class="text-custom-white px-6 py-2 border-0 rounded my-4 bg-custom-blue">
        <span class="text-xl inline-block mr-5 align-middle">
            <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
        </span>
        <span class="inline-block align-middle mr-8">
            {{ message }}
        </span>
        <button @click="close"
            class="bg-transparent outline-none focus:outline-none">
            <span class="text-xl inline-block align-middle"><font-awesome-icon :icon="['fas', 'xmark']" /></span>
        </button>
    </div>
</template>

<script setup>

//props
defineProps(['message', 'close']);

</script>