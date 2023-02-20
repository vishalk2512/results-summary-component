const totalScore = document.querySelector("#totalScore");
const reactionScore = document.querySelector("#reactionScore");
const memoryScore = document.querySelector("#memoryScore");
const verbalScore = document.querySelector("#verbalScore");
const visualScore = document.querySelector("#visualScore");

const updateScore = (element, score, time) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count === score) {
      clearInterval(interval);
    }
    element.textContent = count;
    count++;
  }, time);
};

window.addEventListener("load", () => {
  updateScore(totalScore, 76, 42);
  updateScore(reactionScore, 80, 32);
  updateScore(memoryScore, 92, 30);
  updateScore(verbalScore, 61, 38);
  updateScore(visualScore, 72, 35);
});
