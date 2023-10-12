<template>
    <div class="flex justify-center">
        <Quiz v-if="storeQuiz.currentIndex <= 7" />
        <div v-else class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <div class="text-2xl font-light text-center">
                <h2>Tu as terminé le quiz</h2>
                <p>Ton score est de <span class="font-bold">{{ getResult() }} / {{ storeQuiz.currentIndex }}</span></p>
            </div>
            <div class="text-xl font-light py-8">
                <template v-if="goodResult">
                    <p>Bravo <span class="font-bold">{{ storeUsers.userName }}</span> <span
                            class="text-2xl">&#127881;</span> Tu es une
                        personne cultivée ! Sois fier(e) de toi et continue à
                        t'intéresser au monde qui t'entoure <span class="text-2xl">&#127757;</span></p>
                    <VictoryAnimation />
                </template>
                <template v-else>
                    <p>Ton score n'est pas fou <span class="font-bold">{{ storeUsers.userName }}</span> <span
                            class="text-2xl">&#128529;</span> ... La culture générale c'est pas ton fort... Mais bonne
                        nouvelle, ça se travaille ! Alors au boulot <span class="text-2xl">&#x1F4D6;</span></p>
                    <DefeatAnimation />
                </template>
            </div>
            <div class="flex justify-around mt-4">
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
import { ref } from 'vue';
import { useQuizStore } from '@/stores/quiz.js';
import { useUsersStore } from '@/stores/users';
import VictoryAnimation from '@/components/utils/VictoryAnimation.vue';
import DefeatAnimation from '../utils/DefeatAnimation.vue';

const storeQuiz = useQuizStore();
const storeUsers = useUsersStore();

const goodResult = ref(null);

function getResult() {
    const correctAnswers = [];
    let matchingResult = 0;

    for (const item of storeQuiz.quizData.slice(0, 8)) {
        correctAnswers.push(item.answer);

    }

    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === storeQuiz.userAnswer[i]) {
            matchingResult++;

        }
    }
    matchingResult > storeQuiz.currentIndex / 2 ? goodResult.value = true : goodResult.value = false;
    return matchingResult;
};

</script>