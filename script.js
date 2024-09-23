"use strict";

const overlay = document.querySelector(".overlay");
const showDropdown = document.querySelector(".show");
const hideDropdown = document.querySelector(".hide");
const dropdown = document.querySelector(".dropdown");

showDropdown.addEventListener("click", () => {
  overlay.style.display = "block";
  showDropdown.style.display = "none";
  hideDropdown.style.display = "inline-block";
  dropdown.style.marginLeft = "0";
});
hideDropdown.addEventListener("click", () => {
  overlay.style.display = "none";
  showDropdown.style.display = "inline-block";
  hideDropdown.style.display = "none";
  dropdown.style.marginLeft = "-60%";
});
