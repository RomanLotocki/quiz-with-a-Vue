<template>
    <div class="flex justify-center text-center">
        <div class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <h2 class="mt-2 text-2xl md:text-3xl font-bold">
                Sélectionne ton Quiz
            </h2>
            <div class="flex justify-between py-8">

                <div class="flex flex-col items-center w-1/3 px-4">
                    <router-link to="/classic">
                        <button
                            class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                                class="text-2xl pr-4">&#128212;</span>Classic</button>
                    </router-link>
                    <p class="font-light text-sm">Des questions au hasard sans contraintes.</p>
                </div>

                <div class="flex flex-col items-center w-1/3 px-4">
                    <router-link to="/survival">
                        <button
                            class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                                class="text-2xl pr-4">&#128128;</span>Survie</button>
                    </router-link>
                    <p class="font-light text-sm mb-4">Tente d'aller le plus loin possible sans te tromper.</p>
                    <div>
                        <button @click="showModal" type="button" class="text-3xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">&#127942;</button>
                    </div>
                </div>

                <div class="flex flex-col items-center w-1/3 px-4">
                    <button
                        class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                            class="text-2xl pr-4">&#8987;</span>Contre-la-montre</button>
                    <p class="font-light text-sm">Réponds à un maximum de questions dans le temps imparti.</p>
                    <p class="font-light text-sm text-custom-dark-green">(bientôt disponible)</p>
                </div>

            </div>
        </div>
    </div>

    <!-- This is a modal to display score in Survival mode -->
    <Modal size="md" v-if="isShowModal" @close="closeModal" class="bg-custom-white">
        <template #header class="bg-custom-white">
            <div class="flex items-center text-lg">
                Ton score
            </div>
        </template>
        <template #body>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <span class="text-custom-dark-green font-bold">{{ score }}</span> bonnes réponses à la suite dans le mode Survie
            </p>
        </template>
    </Modal>
</template>

<script setup>

import { Modal } from 'flowbite-vue';
import { ref, onMounted } from 'vue';

const score = ref(0);
const isShowModal = ref(false);

onMounted(() => {
    const scoreFromStorage = sessionStorage.getItem("score");
    if (scoreFromStorage) {
        score.value = scoreFromStorage;
    }
});

function closeModal() {
    isShowModal.value = false;
};

function showModal() {
    isShowModal.value = true;
};

</script>