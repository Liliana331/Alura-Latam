/*
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

*/

/////////////DESAFIO LISTAS

let listaGenerica = [];

let listaNumeros = [5, 7, 4, 4, -4, 0, 1, 100, 8, 2];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(lenguagesDeProgramacion);

/*
lenguagesDeProgramacion.push('Java')
lenguagesDeProgramacion.push('Ruby')
lenguagesDeProgramacion.push('GoLang')*/

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

console.log(lenguagesDeProgramacion);

function impresionOrden(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
impresionOrden(lenguagesDeProgramacion)
console.log('\n\n');

function impresionInversa(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}
impresionInversa(lenguagesDeProgramacion)


function promedioLista(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    console.log(`Promedio: ${suma/array.length}`)
}
promedioLista(listaNumeros);

function numeroMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }
        if(array[i] > mayor){
            mayor = array[i];
        }
    }
    console.log(`Mayor: ${mayor} Menor: ${menor}`);
}
numeroMenorMayor(listaNumeros);

function posicionElemento(array, elemento){
    for(let i = 0; i < array.length; i++){
        if(array[i] === elemento){
             return `El elemento ${elemento} está en la posición ${i}`;
            //break;
        }
    }
    return -1;
}
console.log(posicionElemento(listaNumeros, 100));
console.log(posicionElemento(lenguagesDeProgramacion, 'Java'));
console.log(posicionElemento(lenguagesDeProgramacion, 'java'));

let lista1 = [1, 1, 2];
let lista2 = [2, 1, 2];

function sumaElementos(array1, array2){
    let nuevoArreglo = [];
    let suma = 0;
    for(let i = 0; i < array1.length; i++){
        nuevoArreglo.push(array1[i] + array2[i]);
    }
    console.log(nuevoArreglo);
}
sumaElementos(lista1, lista2);

function cuadradoLista(array){
    let nuevoArreglo = [];
    for(let i = 0; i < array.length; i++){
        nuevoArreglo.push(array[i] * array[i]);
    }
    console.log(nuevoArreglo);
}
cuadradoLista(lista1);
cuadradoLista(lista2);
