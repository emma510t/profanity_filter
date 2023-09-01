const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const button = document.querySelector("button");
const text = document.querySelectorAll("span");
const text1 = document.querySelector("#span1");
const text2 = document.querySelector("#span2");
const text3 = document.querySelector("#span3");

console.log(curseWords);

button.addEventListener("click", safeFW);

function safeFW() {
  text.forEach((each) => {
    each.classList.add("clicked");
  });
  text1.textContent = curseWords[0].good;
  text2.textContent = curseWords[1].good;
  text3.textContent = curseWords[2].good;
  button.addEventListener("click", alreadyClicked);
}

function alreadyClicked() {
  alert("Already SFW");
}
