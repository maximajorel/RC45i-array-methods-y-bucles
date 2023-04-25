// ! Bucle For

// Inicializar una var, //Condicion // incremen o decr de la var
const numerosAMultiplicar = parseInt(
  prompt(
    "Ingrese la cantidad de potencias al cuadrado que desea ver hasta 20 resultados."
  )
);

for (let i = 0; i <= numerosAMultiplicar && i <= 20; i++) {
  let resultado = Math.pow(i, 2);
  console.log(`La potencia de ${i} a la 2 es ${resultado}`);
}
