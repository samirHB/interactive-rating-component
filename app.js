"use strict";

const submit = document.querySelector(".submit");
const hiddenCard = document.querySelector(".card__rated");
const link = document.querySelectorAll(".btn");
const para = document.querySelector(".main__para");
let selected;

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    link[i].style.backgroundColor = "hsl(216, 12%, 54%)";
    selected = link[i].textContent;
  });
}


  submit.addEventListener("click", function () {
    hiddenCard.classList.toggle("hidden");
    para.textContent = `You selected ${selected} out of 5`;
  });
