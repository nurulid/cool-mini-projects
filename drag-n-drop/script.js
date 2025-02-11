// 1. define all function and test it with console.log
// 2. define the elements
// 3. began with dragStart and dragEnd function
// 4. for loop the empties and fire dragOver, dragEnter, dragLeave, dragDrop inside each empty
// 5. update the dragStart and dragEnd function by adding and replacing the classes
// 6. update the dragDrop fucntion by set the class to "empty" then append fill element inside
// 7. update the dragEnter function by adding the hovered class
// 8. update the dragLeave function by set the class to "empty again"

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  // this refering to the "fill" element, because the addEventListener was add to it
  this.className += " hold"; // += means inserting
  setTimeout(() => (this.className = "invisible"), 0);
  // console.log("drag start");
}

function dragEnd() {
  this.className = "fill";
  // console.log("drag end");
}

function dragOver(e) {
  e.preventDefault(); // because dragover has default behaviour that will reset the current drag operation to none to prevent this, add this  preventDefault()
  // console.log("drag Over");
}

function dragEnter(e) {
  e.preventDefault(); // because dragenter has default behaviour too, check mdn docs
  this.className += " hovered";
  // console.log("drag Enter");
}

function dragLeave() {
  this.className = "empty";
  // console.log("drag Leave");
}

function dragDrop() {
  // this refering to the "empty" element, because the addEventListener was add to it
  this.className = "empty";
  this.append(fill);
  // console.log("drag Drop");
}
