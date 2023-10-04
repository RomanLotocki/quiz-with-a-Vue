import { defineStore } from "pinia";
import sourceData from '@/data.json';

export const useDataStore = defineStore('data', {
    state: () => ({
    rawData: sourceData.quizDb,
    }),
    // Fisher-Yates algorithm : get each execution a shuffled array based on the datas files and choose the first five elements.
    getters: {
        dataRandomizer: (state) => {
        for (let i = state.rawData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = state.rawData[i];
          state.rawData[i] = state.rawData[j];
          state.rawData[j] = temp;
        }
        state.rawData.splice(0, 5);
        return state.rawData;
      },
    },  
})