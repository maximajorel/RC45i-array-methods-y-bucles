const text = prompt("Por favor ingrese una palabra para escribirla al revés");

let textoAlReves = "";

const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let cantidadVocales = 0;

for (let i = text.length - 1; i >= 0; i--) {
  textoAlReves += text[i];
  if (text.includes(vocales[i])) {
    cantidadVocales++;
  }
}

document.write(
  `El texto escrito al revés es ${textoAlReves} y tiene ${cantidadVocales} vocales`
);
