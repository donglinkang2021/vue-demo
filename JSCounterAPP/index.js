const countIncBtn = document.getElementById('inc');
const countDecBtn = document.getElementById('dec');
const countDisplay = document.getElementById('count');

let count = 0;

countIncBtn.addEventListener("click", () => {
  count++;
  countDisplay.innerHTML = count;
});

countDecBtn.addEventListener("click", () => {
  count--;
  countDisplay.innerHTML = count;
});