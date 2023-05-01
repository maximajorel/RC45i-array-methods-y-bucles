// ! Bucle While
const numeroQueSeMultiplicara = parseInt(
  prompt("Ingrese un número para mostrar la tabla de multiplicar hasta el 10")
);
let i = 0;
if (isNaN(numeroQueSeMultiplicara)) {
  alert("Por favor,ingrese un numero valido");
  location.reload();
} else {
  while (i <= 10) {
    let multiplicacion = numeroQueSeMultiplicara * i;
    console.log(`${numeroQueSeMultiplicara} x ${i} = ${multiplicacion}`);
    i++;
  }
}

/* 
    Suma de números naturales:

    Pedir a los estudiantes que escriban un programa que calcule la suma de los primeros n números naturales utilizando un bucle while. Por ejemplo, si n es 5, la suma sería 1 + 2 + 3 + 4 + 5 = 15.
*/

const sumaNumeros = parseInt(
  prompt("Ingrese un numero para sumar los primeros n números naturales")
);
let suma = 0;
let contador = 1;
if (isNaN(numeroQueSeMultiplicara)) {
  alert("Por favor,ingrese un numero valido");
  location.reload();
} else {
  while (contador <= sumaNumeros) {
    suma = contador + i;
    contador++;
  }

  console.log(
    `La suma de los primeros ${sumaNumeros} numeros naturales es: ${contador}`
  );
}
