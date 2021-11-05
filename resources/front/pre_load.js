const countElem = document.querySelector("#count");
const timeElem = document.querySelector("#time");

let count = 3;

function render(time) {
  time *= 0.001;  // seconds
  count = count + 1;

  countElem.textContent = count;
  timeElem.textContent = time.toFixed(2);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);