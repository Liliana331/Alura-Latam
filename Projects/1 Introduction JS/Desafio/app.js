
const prompt = require("prompt-sync")({ sigint: true });

/**Desafíos

Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
Declara una variable llamada nombre y asígnale el valor "Luna".
Crea una variable llamada edady asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". */

/*
alert("¡Bienvenida y bievenido a nuestro sitio web!");

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombre = prompt("Ingresa tu nombre: ");
edad = prompt("Ingresa tu edad: ");

if(edad >= 18){
    alert("¡Puedes obtener tu licencia de conducir!")
}
*/

/*Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

/*
let diaUsuario = prompt("Qué día de la semana es: ");

//console.log(diaUsuario.toLowerCase);

if(diaUsuario.toLowerCase() == "sabado" || diaUsuario.toLowerCase() == "domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}


let numeroUsuario2 = prompt("Ingresa un numero: ");

if(numeroUsuario2 < 0){
    alert("El numero es Negativo");
} else{
    alert("El Numero es positivo");
}

*/

/*

//Ejercicio practico
let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador--;
}

let promedio = soma / qtdNumeros;

console.log(promedio);
*/

/**Desafio
 * 
 * Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador */

/*
let contador2 = 1;

while(contador2 <= 10){
    console.log(`Contador 2: ${contador2}`)
    contador2++;
}

console.log("\n\n");

let contador3 = 10;

while(contador3 >= 0){
    console.log(`Contador 3: ${contador3}`)
    contador3--;
}

console.log("\n\n");

let contador4 = 0;
let numUser4 = prompt("Ingrese numero para cuenta progresiva: ")

while(numUser4 >= contador4){
    console.log(`Contador 4: ${contador4}`)
    contador4++;
}

console.log("\n\n"); 

let numUser5 = prompt("Ingrese numero para cuenta regresiva: ")

while(numUser5 >= 0){
    console.log(`Contador 5: ${numUser5}`)
    numUser5--;
}

*/

/*
let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
}


palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

*/

/**Desafíos finales:

Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */

/**
 Aquecendo na programação - Respostas
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Gui Lima';
console.log(`Olá, ${nome}!`);
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
let nome = 'Gui Lima';
alert(`Olá, ${nome}!`);
Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
Use um loop while para imprimir os números de 1 a 10 no console.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);
Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
 */






















