const buttonRed = document.querySelector("#buttonRed");
const buttonBlue = document.getElementById("buttonBlue");
const buttonGreen = document.querySelector("#buttonGreen");

const elementBody = document.querySelector("body");

buttonRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

buttonBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

buttonGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
