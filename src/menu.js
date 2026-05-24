export default function loadMenu() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Carta";

  const tapasTitle = document.createElement("h2");
  tapasTitle.textContent = "Tapes";

  const tapasList = document.createElement("ul");

  const tapas = [
    "Patates braves",
    "Croquetes de pernil",
    "Pa amb tomàquet",
    "Calamars a la romana",
    "Truita de patates",
  ];

  tapas.forEach((tapa) => {
    const li = document.createElement("li");
    li.textContent = tapa;
    tapasList.appendChild(li);
  });

  const sandwichesTitle = document.createElement("h2");
  sandwichesTitle.textContent = "Entrepans";

  const sandwichesList = document.createElement("ul");

  const sandwiches = [
    "Bikini de pernil i formatge",
    "Entrepà de fuet",
    "Entrepà de botifarra amb formatge",
    "Entrepà de llom amb formatge i ceba",
    "Entrepà de tonyina amb olives",
  ];

  sandwiches.forEach((sandwich) => {
    const li = document.createElement("li");
    li.textContent = sandwich;
    sandwichesList.appendChild(li);
  });

  content.appendChild(heading);
  content.appendChild(tapasTitle);
  content.appendChild(tapasList);
  content.appendChild(sandwichesTitle);
  content.appendChild(sandwichesList);
}
