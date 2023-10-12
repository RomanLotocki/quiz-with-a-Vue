<template>
    <div class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-xl shadow-md">
        <div class="mt-2">
            <h2 class="text-xl font-semibold"><span>{{ store.currentIndex + 1 }}. </span>{{ currentItem.question }}
            </h2>
            <div>
                <div v-for="(answer, index) in currentItem.choices" :key="index" class="flex items-center my-4">
                    <input :id="currentItem.id + index" type="radio" :name="'answers' + currentItem.id" :value="answer"
                        v-model="store.selectedAnswer" :disabled="store.selectedAnswer != null" @change="userAnswerHandler"
                        class="h-4 w-4 bg-custom-white text-custom-dark-green border-gray-400 focus:ring-2 focus:ring-gray-300"
                        :class="{ 'text-red-600': store.falseAnswerClass }" />
                    <label :for="currentItem.id + index" class="ml-2 block font-light">
                        {{ answer }}
                    </label>
                </div>

                <div v-if="store.selectedAnswer != null" class="flex justify-center">
                    <div class="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                        :class="[store.falseAnswerClass ? 'border-t-4 border-red-600' : 'border-t-4 border-custom-dark-green']">
                        <div class="p-6">
                            <p class="mb-2 block text-xl font-semibold">
                                {{ answerMsg() }}
                            </p>
                            <p v-if="store.falseAnswerClass" class="mb-2 block text-large font-semibold">C'était "{{
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
                suivant
            </button>
        </div>
    </div>
</template>

<script setup>

//imports
import { useQuizStore } from '@/stores/quiz.js';
import { computed } from 'vue';

//stores
const store = useQuizStore()

const currentItem = computed(() => {
    return store.quizData[store.currentIndex];
});

//functions
function nextItem() {

    if (store.selectedAnswer != null) {
        store.currentIndex++;
        store.selectedAnswer = null;
    }
};

function userAnswerHandler() {
    store.userAnswer.push(store.selectedAnswer);
    if (store.selectedAnswer != currentItem.value.answer) {
        store.falseAnswerClass = true;
    } else {
        store.falseAnswerClass = false;
    }
};

function answerMsg() {
    return store.falseAnswerClass ? "Mauvaise réponse " + String.fromCodePoint(0x1F62D) : "Bonne réponse " + String.fromCodePoint(0x1F601);
};

</script>