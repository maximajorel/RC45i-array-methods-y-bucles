const producto1 = 346.56;
const producto2 = 596.3;
const producto3 = 180.34;
const dolar = 470;
const iva = 1.21;
const ganancia = 1.35;
const interesFinanciacion = 1.4;

function CalcularPrecios(valorProducto, numCuotas = 12) {
  const precioContado = +(valorProducto * dolar * iva * ganancia).toFixed(2);
  const precioFinanciado = +(precioContado * interesFinanciacion).toFixed(2);
  const precioCuota = +(precioFinanciado / numCuotas).toFixed(2);
  document.write(`<p><strong>PRECIO CONTADO: </strong> $ ${precioContado}</p>`);
  if (numCuotas && numCuotas > 1) {
    document.write(
      `<p><strong>${numCuotas} cuotas de $ ${parseInt(
        precioCuota
      )}</strong> </p>`
    );
    document.write(
      `<p><small>PRECIO LISTA: </small>$ ${precioFinanciado}</p><hr>`
    );
  }
}
// ====================================================================

// ! Otras forma de definir las funciones

const calcularPrecioLista = function () {};
const calcularPrecioCuota = () => {};

// TODO Las diferencia es que estas funciones seran accesibles unicamente cuando esten declaradas, no podemos utilizarlas antes

// ====================================================================

CalcularPrecios(producto1, 12);
CalcularPrecios(producto2, 6);
CalcularPrecios(producto3, 0);

// function calcularPerimetro(diametro) {
//   const perimetro = parseInt(Math.PI * diametro * 100) / 100;
//   document.write(`Perimetro del circulo es ${perimetro}<br>`);
// }
// function calcularPerimetroRectangulo(base, altura) {
//   const perimetro = base * altura;
//   document.write(
//     `Perimetro del rectangulo es <strong>${perimetro}</strong> <br>`
//   );
// }

// calcularPerimetro(25);
// calcularPerimetroRectangulo(120, 50);

// function saludo(nombre) {

//   alert(`Bienvenido ${nombre} al sitio web`);
// }

// saludo("Maxi");
