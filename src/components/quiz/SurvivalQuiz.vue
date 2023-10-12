<template>
    <div class="flex justify-center">

        <Quiz v-if="endOfQuiz" />

        <div v-else class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <div class="font-light text-center">
                <h2 class="text-xl font-semibold">Ton quiz est terminé !</h2>
                <div v-if="storeQuiz.falseAnswerClass"
                    class="rounded-xl my-8 bg-white bg-clip-border text-gray-700 shadow-md border-t-4 border-red-600">
                    <div class="p-6">
                        <p class="mb-2 block text-xl font-semibold">
                            Mauvaise réponse &#128557;
                        </p>
                        <p class="mb-2 block text-large font-semibold">C'était "{{
                            storeQuiz.currentItem.answer }}"
                        </p>
                        <p class="font-light leading-relaxed antialiased">
                            {{ storeQuiz.currentItem.explanation }}
                        </p>
                    </div>
                </div>
                <p v-if="storeQuiz.falseAnswerClass">Tu as répondu correctement à <span class="font-bold">{{ storeQuiz.currentIndex }}</span> questions</p>
                <p v-if="storeQuiz.falseAnswerClass===false">Tu as répondu à toutes les questions du Quiz. Tu es officiellement génial(e) <span class="text-2xl">&#129504;</span></p>
            </div>
            <div class="flex justify-around mt-8">
                <router-link to="/">
                    <button type="button"
                        class="rounded bg-custom-blue px-6 py-2 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform">
                        nouveau quiz
                    </button>
                </router-link>

            </div>
        </div>

    </div>
</template>

<script setup>
import Quiz from './Quiz.vue';
import { computed } from 'vue';
import { useQuizStore } from '@/stores/quiz.js';
import { useUsersStore } from '@/stores/users';

const storeQuiz = useQuizStore();
const storeUsers = useUsersStore();

const endOfQuiz = computed(() => {
    if (storeQuiz.falseAnswerClass || storeQuiz.currentIndex === storeQuiz.quizData.length) {
        return false
    }
    else {
        return true;
    }
});

</script>