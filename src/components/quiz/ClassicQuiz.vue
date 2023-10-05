<template>
    <div class="flex justify-center">
        <div v-if="inProgress" class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-xl shadow-md">
            <div class="mt-2">
                <h2 class="text-xl font-semibold"><span>{{ currentIndex + 1 }}. </span>{{ currentItem.question }}</h2>
                <div>
                    <div v-for="(answer, index) in currentItem.choices" :key="index" class="flex items-center my-4">
                        <input :id="currentItem.id + index" type="radio" :name="'answers' + currentItem.id" :value="answer"
                            v-model="selectedAnswer" :disabled="selectedAnswer != null" @change="userAnswerHandler"
                            class="h-4 w-4 bg-custom-white text-custom-dark-green border-gray-400 focus:ring-2 focus:ring-gray-300"
                            :class="{ 'text-red-600': falseAnswerClass }" />
                        <label :for="currentItem.id + index" class="ml-2 block font-light">
                            {{ answer }}
                        </label>
                    </div>

                    <div v-if="selectedAnswer != null" class="flex justify-center">
                        <div class="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                            :class="[falseAnswerClass ? 'border-t-4 border-red-600' : 'border-t-4 border-custom-dark-green']">
                            <div class="p-6">
                                <p class="mb-2 block text-xl font-semibold">
                                    {{ answerMsg() }}
                                </p>
                                <p v-if="falseAnswerClass" class="mb-2 block text-large font-semibold">C'était "{{
                                    currentItem.answer }}"</p>
                                <p class="font-light leading-relaxed antialiased">
                                    {{ currentItem.explanation }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-around mt-4">
                <button type="button" @click="nextItem()"
                    class="rounded-lg bg-custom-blue px-6 py-2 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform">
                    {{ nextButton }}
                </button>
            </div>
        </div>
        <div v-else class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <div class="text-2xl font-light text-center">
                <h2>Tu as terminé le quiz</h2>
                <p>Ton score est de <span class="font-bold">{{ getResult() }} / {{ quizData.length }}</span></p>
            </div>
            <div class="text-xl font-light py-8">
                <p v-if="goodResult">Bravo <span class="font-bold">{{ userName }}</span> <span
                        class="text-2xl">&#127881;</span> Tu es une personne cultivée ! Sois fier de toi et continue à
                    t'intéresser au monde qui t'entoure <span class="text-2xl">&#127757;</span></p>
                <p v-else>Ton score n'est pas fou <span class="font-bold">{{ userName }}</span> <span
                        class="text-2xl">&#128529;</span> ... La culture générale c'est pas ton fort... Mais bonne
                    nouvelle, ça se travaille ! Alors au boulot <span class="text-2xl">&#x1F4D6;</span></p>
            </div>
            <div class="flex justify-around mt-4">
                <button type="button" @click="resetQuiz"
                    class="rounded bg-custom-blue px-6 py-2 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform">
                    nouveau quiz
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>

//imports
import { ref, computed } from 'vue';
import { useUsersStore } from '@/stores/users'
import sourceData from '@/data.json'
import { quizRandomizer } from '@/utils.js'

//variables
const userAnswer = [];
let originData = quizRandomizer(sourceData.quizDb);
let quizData = originData.slice(0, 5);

//refs
const currentIndex = ref(0);
const selectedAnswer = ref(null);
const inProgress = ref(true);
const falseAnswerClass = ref(false);
const nextButton = ref("suivant");
const goodResult = ref(null);

//Userstore
const userStore = useUsersStore();
const userName = userStore.userName;

//computed properties
const currentItem = computed(() => {
    return quizData[currentIndex.value];
});

//functions
function nextItem() {

    if (selectedAnswer.value != null) {
        currentIndex.value++;
        selectedAnswer.value = null;
        if (currentIndex.value >= quizData.length) {
            currentIndex.value = 0;
            inProgress.value = false;
        }
    }
}

function userAnswerHandler() {
    userAnswer.push(selectedAnswer.value);
    if (selectedAnswer.value != currentItem.value.answer) {
        falseAnswerClass.value = true;
    } else {
        falseAnswerClass.value = false;
    }
    if (currentIndex.value === quizData.length - 1) {
        nextButton.value = "score";
    }
}

function answerMsg() {
    return falseAnswerClass.value ? "Mauvaise réponse " + String.fromCodePoint(0x1F62D) : "Bonne réponse " + String.fromCodePoint(0x1F601)
}

function getResult() {
    const correctAnswers = [];
    let matchingResult = 0;

    for (const item of quizData) {
        correctAnswers.push(item.answer)
    }

    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === userAnswer[i]) {
            matchingResult++;
        }
    }
    matchingResult > quizData.length / 2 ? goodResult.value = true : goodResult.value = false;
    return matchingResult;
}

function resetQuiz() {

    userAnswer.length = 0;
    inProgress.value = true;
    nextButton.value = "suivant";
    goodResult.value = null;
    //resetting the originData variable with new random data and slicing it again!
    originData = quizRandomizer(sourceData.quizDb);
    quizData = originData.slice(0, 5);
}

</script>