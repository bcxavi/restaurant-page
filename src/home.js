export default function loadHome() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "El racó de l'Ona";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Tapes casolanes i entrepans calents al cor del Guinardó.";

  content.appendChild(heading);
  content.appendChild(paragraph);
}
