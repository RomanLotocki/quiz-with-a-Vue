import { defineStore } from 'pinia';
import { ref } from 'vue';
import { quizRandomizer } from '@/utils.js';
import sourceData from '@/data.json';

export const useQuizStore = defineStore('quiz', () => {

    let quizData = quizRandomizer(sourceData.quizDb);

    const userAnswer = ref([]);
    const currentIndex = ref(0);
    const selectedAnswer = ref(null);
    const falseAnswerClass = ref(false);
    const goodResult = ref(null);

    function $reset() {

        quizData = quizRandomizer(sourceData.quizDb);
        userAnswer.value = [];
        currentIndex.value = 0;
        selectedAnswer.value = null;
        falseAnswerClass.value = false;
        goodResult.value = null;
    }

    return { userAnswer, quizData, currentIndex, selectedAnswer, falseAnswerClass, goodResult, $reset };

})