const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
const infoBtn = document.querySelector(".info-btn");
const infoDesc = document.querySelector(".info-desc");

infoBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  infoDesc.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!infoBtn.contains(e.target) && !infoDesc.contains(e.target)) {
    infoDesc.classList.remove("show");
  }
});

// initialize the loading value from 0
let load = 0;
// run blurring function every 30ms using setInterval
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  // loading text from 0 to 100
  loadingText.innerText = `${load}%`;
  // loading text opacity from 1 to 0 (slowly disappear)
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  // background blur effect from 30 to 0
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  console.log(load);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
