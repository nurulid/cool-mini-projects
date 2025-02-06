const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
const resetBtn = document.getElementById("reset");
const descEl = document.getElementById("desc");
const alertEl = document.getElementById("alert");
const lengthEl = document.getElementById("tags-length");
const resultEl = document.getElementById("result");
const resultWrapperEl = document.getElementById("resultWrapper");
const tagClasses = [
  "tag",
  "px-4",
  "py-1",
  "border",
  "rounded-full",
  "bg-slate-200",
  "text-sm",
  "text-slate-500",
  "[&.active]:bg-violet-500",
  "[&.active]:text-white",
];

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  const tags = e.target.value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // run the createTags function
  createTags(e.target.value);
  lengthEl.innerText = `${tags.length} ${tags.length > 1 ? "Choices" : "Choice"}`;

  // run randomSelect function if hit Enter
  if ((e.key === "Enter") & (tags.length < 2)) {
    alertEl.classList.remove("hidden");
  }

  if ((e.key === "Enter") & (tags.length > 1)) {
    {
      // clear the textarea after 10ms
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      randomSelect();
      alertEl.classList.add("hidden");
    }
  }
});

resetBtn.addEventListener("click", () => {
  while (tagsEl.firstChild) {
    tagsEl.removeChild(tagsEl.firstChild);
  }
  textarea.focus();
  resetBtn.classList.add("hidden");
  descEl.classList.remove("hidden");
  lengthEl.innerText = "0 Choice";
  resultWrapperEl.classList.add("hidden");
});

// function to create each tag seperate by comma
function createTags(input) {
  // create an array with split the input with comma
  // filter the empty space to not be included
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // console.log(tags);

  // clear the tags element (the wrapper) first
  tagsEl.innerHTML = "";

  // to create the tag element with the classes and text value
  // put the tags into the tags wrapper element (tagsEl)
  tags.forEach((tag) => {
    // create a tag element
    const tagEl = document.createElement("li");
    // add classes to the tag element
    tagEl.classList.add(...tagClasses);
    // insert the tag text value
    tagEl.innerText = tag;
    // put "append" tag element into TAGS element (the wrapper)
    tagsEl.appendChild(tagEl);
  });
}

// random select functionality
function randomSelect() {
  // the number of times that going to highlight each one before it stop
  const times = 27;

  // setInterval, run this for every 100ms
  // run pickRandomTag to pick random tag
  // highlighting the random tag
  // this is for shifting it to each one, highlight and unhighlight the random tag for every 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    // then un-highlight the tag every 100ms
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // stop the shifting at (times * 100)
  // and pick one random tag (by stoping it)
  setTimeout(() => {
    // stop our interval function
    clearInterval(interval);

    // pick a random tag to stop on
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      
      // Display the selected random choice in the #result element
      resultEl.innerText = randomTag.innerText;
    }, 100);

    setTimeout(() => {
      resetBtn.classList.remove("hidden");
      descEl.classList.add("hidden");
      resultWrapperEl.classList.remove("hidden");
    }, 500);
  }, times * 100);
}

function pickRandomTag() {
  // select all tag elements
  const tags = document.querySelectorAll(".tag"); // tags is a nodelist and similar to array
  // then we return to pick a random tag which is an index of array using Math method
  return tags[Math.floor(Math.random() * tags.length)];
}

// to highlight the tag
function highlightTag(tag) {
  tag.classList.add("active");
}

// to unhighlight the tag
function unHighlightTag(tag) {
  tag.classList.remove("active");
}
