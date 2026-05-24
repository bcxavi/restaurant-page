export default function loadMenu() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Carta";

  const tapasTitle = document.createElement("h2");
  tapasTitle.textContent = "Tapes";

  const tapasList = document.createElement("ul");
  const tapas = [
    {
      name: "Patates braves",
      description: "Salsa brava casolana i allioli suau",
      price: "5,50€",
    },

    {
      name: "Croquetes de pernil",
      description: "Cruixents per fora i cremoses per dins",
      price: "6,00€",
    },

    {
      name: "Pa amb tomàquet",
      description: "Pa de coca torrat amb tomàquet i oli d'oliva",
      price: "4,00€",
    },

    {
      name: "Calamars a la romana",
      description: "Arrebossat lleuger amb llimona fresca",
      price: "7,50€",
    },

    {
      name: "Truita de patates",
      description: "Ou, patata i ceba feta al moment",
      price: "5,00€",
    },
  ];

  tapas.forEach((tapa) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const name = document.createElement("h3");
    name.textContent = tapa.name;

    const description = document.createElement("p");
    description.textContent = tapa.description;

    const price = document.createElement("span");
    price.textContent = tapa.price;

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    tapasList.appendChild(card);
  });

  const sandwichesTitle = document.createElement("h2");
  sandwichesTitle.textContent = "Entrepans";

  const sandwichesList = document.createElement("ul");

  const sandwiches = [
    {
      name: "Bikini de pernil i formatge",
      description: "Pa torrat amb formatge fos i pernil dolç",
      price: "5,50€",
    },

    {
      name: "Entrepà de fuet",
      description: "Fuet tallat fi amb pa de coca cruixent",
      price: "6,00€",
    },

    {
      name: "Entrepà de botifarra amb formatge",
      description: "Botifarra a la brasa amb formatge fos",
      price: "8,50€",
    },

    {
      name: "Entrepà de llom amb formatge i ceba",
      description: "Llom tendre amb ceba caramel·litzada",
      price: "7,50€",
    },

    {
      name: "Entrepà de tonyina amb olives",
      description: "Tonyina, olives verdes i tomàquet fresc",
      price: "6,50€",
    },
  ];

  sandwiches.forEach((sandwich) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const name = document.createElement("h3");
    name.textContent = sandwich.name;

    const description = document.createElement("p");
    description.textContent = sandwich.description;

    const price = document.createElement("span");
    price.textContent = sandwich.price;

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    sandwichesList.appendChild(card);
  });

  content.appendChild(heading);
  content.appendChild(tapasTitle);
  content.appendChild(tapasList);
  content.appendChild(sandwichesTitle);
  content.appendChild(sandwichesList);
}
