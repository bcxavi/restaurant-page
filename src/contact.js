export default function loadContact() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Contacte";

  const address = document.createElement("p");
  address.textContent = "📍 Plaça Catalana, 1 - Barcelona";

  const schedule = document.createElement("p");
  schedule.textContent = "🕒 Horari: de dimarts a dissabte de 12:00 a 17:00";

  const phone = document.createElement("p");
  phone.textContent = "📞 Telèfon: 93 458 27 16";

  content.appendChild(heading);
  content.appendChild(address);
  content.appendChild(schedule);
  content.appendChild(phone);
}
