const paisesLatam = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Guyana Francesa",
  "Paraguay",
  "Perú",
  "Suriname",
  "Uruguay",
  "Venezuela",
  "Guyana",
  "Guyana Francesa",
  "Paraguay",
  "Perú",
  "Suriname",
  "Uruguay",
  "Venezuela",
];

for (let i = 0; i < paisesLatam.length; i++) {
  let numero = String(paisesLatam.length - i).padStart(2, "0");
  document.write(`<p> ${numero} - ${paisesLatam[i]}</p>`);
}
