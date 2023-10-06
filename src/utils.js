// Fisher-Yates algorithm : get a randomly shuffled array on each execution
export function quizRandomizer(data) {
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      return data;
};