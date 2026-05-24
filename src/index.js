import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import onaLogo from "./images/ona-logo.png";

import "./styles.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

const content = document.querySelector("#content");

const logo = document.querySelector("#logo");
logo.src = onaLogo;
logo.alt = "Logo d'Ona";

function clearContent() {
  content.innerHTML = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContact();
});

loadHome();
