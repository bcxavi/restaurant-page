import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./styles.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const content = document.querySelector("#content");

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
