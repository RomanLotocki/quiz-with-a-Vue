<template>
    <div class="flex justify-center">
        <div class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <h2 class="mt-2 text-2xl md:text-3xl font-bold">
                Bienvenue sur l'application qui teste ta culture générale
            </h2>
            <p class="py-6 text-xl font-light">Entre un pseudo et clique sur "commencer"
            </p>
            <div class="flex justify-center mt-6">
                <div class="flex flex-wrap items-stretch">
                    <span class="z-10 leading-snug font-normal fixed text-center rounded text-base w-8 pl-3 py-3">
                        <font-awesome-icon :icon="['fas', 'user']" class="text-custom-blue" />
                    </span>
                    <input v-model="userName" ref="input" type="text" :placeholder="myPlaceholder"
                        @blur="initialPlaceholder" @focus="secondPlaceholder" @keyup.enter="start"
                        class="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-custom-white rounded text-sm border-0 shadow ring-2 ring-custom-light-green focus:ring-custom-blue focus:ring-2 pl-10" />
                </div>
            </div>
            <div class="flex justify-center">
                <AlertComponent v-if="errorInput" message="Le pseudo doit avoir au moins 3 caractères"
                    :close="closeMessage" />
            </div>
            <div class="flex justify-center">
                <p class="mt-6 font-light">Player Name: <span class="font-medium text-custom-blue">{{ userName }}</span>
                </p>
            </div>
            <div class="flex justify-center">
                <button type="button" @click="start"
                    class="block rounded bg-custom-blue px-6 py-2 mt-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform">
                    commencer
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

//imports
import { ref } from 'vue';
import AlertComponent from "@/components/utils/Alert.vue";
import { useUsersStore } from '@/stores/users';

//variables
const input = ref(null);
const myPlaceholder = ref("ton pseudo");
const errorInput = ref(false);

//store variables
const store = useUsersStore();
const userName = ref(store.userName);

//events
const emit = defineEmits(['continue']);

//functions
function start() {
    if (!userName.value) {
        input.value.focus();
        myPlaceholder.value = "entre un pseudo";
        //using a regex in order to remove all the spaces in the string (g is the global flag to get all the occurrences)
    } else if (userName.value.replace(/ /g, "").length < 3) {
        input.value.focus();
        errorInput.value = true;
    } else {
        emit('continue');
        store.userName = userName;
    }
};

function initialPlaceholder() {
    myPlaceholder.value = "ton pseudo";
};

function secondPlaceholder() {
    myPlaceholder.value = "entre un pseudo";
};

function closeMessage() {
    errorInput.value = false;
};

</script>