import onaLogo from "./images/ona-logo.png";

export default function loadHome() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("home-hero");

  const image = document.createElement("img");
  image.src = onaLogo;
  image.alt = "Ona";
  image.classList.add("home-logo");

  const heading = document.createElement("h1");
  heading.textContent = "El racó de l'Ona";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Tapes casolanes i entrepans calents al cor del Guinardó.";

  hero.appendChild(image);
  hero.appendChild(heading);

  content.appendChild(hero);
  content.appendChild(paragraph);
}
