const panels = document.querySelectorAll(".panel"); // use querySelectorAll to select all panels
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

// console.log(panels[0]) // targeting specific panel

//loop the array using forEach
panels.forEach((panel) => {
  //set eventListener for each panel
  panel.addEventListener("click", () => {
    // 1. need to remove active class on other panel using a function
    removeActiveClasses();
    // 2. add active class in clicked element
    panel.classList.add("active");
  })
})

function removeActiveClasses() {
  // loop the panels
  panels.forEach((panel) => {
    // remove active class
    panel.classList.remove("active");
  })

}