function calcularIMC(altura, peso){
    return peso / Math.pow(altura, 2);
}
console.log(calcularIMC(157, 45));

function factorial(numero){
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(3));

//Sln profe
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  

function calcularAreaPerimetro(alto, ancho){
    let area = (ancho * alto);
    let perimetro = 2 * (ancho + alto);
    return `area: ${area} - perimetro: ${perimetro}`
}
console.log(calcularAreaPerimetro(2, 6));

function calcularAreaPerimetroCircular(radio){
    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * (radio);
    return `area: ${area} - perimetro: ${perimetro}`
}
console.log(calcularAreaPerimetroCircular(2));

function tablaMultiplicar(numero){
    for (let index = 0; index <= 10; index++) {
        console.log(`${numero} x ${index} = ${numero * index}`);
        
    }
}

tablaMultiplicar(5);









