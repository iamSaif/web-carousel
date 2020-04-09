var slider = document.querySelector(".slider");
var images = document.querySelectorAll(".slider img");

var prevbtn = document.querySelector(".prev");
var nextbtn = document.querySelector(".next");

let counter = 1;
var size = images[0].clientWidth;
slider.style.transform = "translateX(" + (-size * counter) + "px";

nextbtn.addEventListener("click", function () {
  if (counter >= images.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + (-size * counter) + "px";
});

prevbtn.addEventListener("click", function () {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + (-size * counter) + "px";
});

slider.addEventListener("transitionend", function () {
  if (images[counter].className === "lastclone") {
    slider.style.transition = "none";
    counter = images.length = -2;
    slider.style.transform = "translateX(" + (-size * counter) + "px";
  }
  if (images[counter].className === "firstclone") {
    slider.style.transition = "none";
    counter = images.length - counter;
    slider.style.transform = "translateX(" + (-size * counter) + "px";
  }
});
