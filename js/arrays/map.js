const paisesLatinoamerica = [
  {
    nombre: "Argentina",
    ubicacion: "Sur de Sudamérica",
    habitantes: 45000000,
    capital: "Buenos Aires",
  },
  {
    nombre: "Bolivia",
    ubicacion: "Centro de Sudamérica",
    habitantes: 11000000,
    capital: "La Paz",
  },
  {
    nombre: "Brasil",
    ubicacion: "Este de Sudamérica",
    habitantes: 211000000,
    capital: "Brasilia",
  },
  {
    nombre: "Chile",
    ubicacion: "Sur de Sudamérica",
    habitantes: 19000000,
    capital: "Santiago",
  },
  {
    nombre: "Colombia",
    ubicacion: "Norte de Sudamérica",
    habitantes: 50340000,
    capital: "Bogotá",
  },
  {
    nombre: "Costa Rica",
    ubicacion: "Centroamérica",
    habitantes: 5100000,
    capital: "San José",
  },
  {
    nombre: "Cuba",
    ubicacion: "El Caribe",
    habitantes: 11400000,
    capital: "La Habana",
  },
  {
    nombre: "Ecuador",
    ubicacion: "Oeste de Sudamérica",
    habitantes: 17300000,
    capital: "Quito",
  },
  {
    nombre: "El Salvador",
    ubicacion: "Centroamérica",
    habitantes: 6500000,
    capital: "San Salvador",
  },
  {
    nombre: "Guatemala",
    ubicacion: "Centroamérica",
    habitantes: 18200000,
    capital: "Ciudad de Guatemala",
  },
  {
    nombre: "Honduras",
    ubicacion: "Centroamérica",
    habitantes: 10000000,
    capital: "Tegucigalpa",
  },
  {
    nombre: "México",
    ubicacion: "Norte de América Central",
    habitantes: 128900000,
    capital: "Ciudad de México",
  },
  {
    nombre: "Nicaragua",
    ubicacion: "Centroamérica",
    habitantes: 6400000,
    capital: "Managua",
  },
  {
    nombre: "Panamá",
    ubicacion: "Centroamérica",
    habitantes: 4300000,
    capital: "Ciudad de Panamá",
    bandera: "http://dasdsa",
  },
  {
    nombre: "Paraguay",
    ubicacion: "Centro de Sudamérica",
    habitantes: 7200000,
    capital: "Asunción",
  },
];

const arrayModificado = paisesLatinoamerica.map(function (pais) {
  const nameUppercase = pais.nombre.toUpperCase();
  const pop = new Intl.NumberFormat("es-AR", {
    compactDisplay: "short",
  });
  return {
    nombre: nameUppercase,
    population: pop.format(pais.habitantes),
  };
});

// ! La diferencia entre el map y el forEach, es que si bien cada uno itera con cada uno de los elementos, el map sirve para obtener un array modificado

console.log(paisesLatinoamerica);
console.log(arrayModificado);
