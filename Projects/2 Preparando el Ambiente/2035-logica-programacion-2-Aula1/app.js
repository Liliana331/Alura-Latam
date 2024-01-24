//query selector para asociar elementos del html con el js, se asocia a una vble que es un objeto

/*
Las siguientes lineas se pasaron a función para reducir código

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Número Secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";*/

let min = 1;
let max = 10;

let numeroSecreto = parseInt(calcularNumeroSecreto(min, max));

let arrayNumerosSecretos = [];

let numeroIntentos = 1;
let maxIntentos = 3;

alert(numeroSecreto);

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', "Indica un número del 1 al 10");


//asignar titulo y parrafo desde js
function asignarTextoElemento(etiqueta, texto){
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML = texto;
}

function calcularNumeroSecreto(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let secreto = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    arrayNumerosSecretos.push(secreto);
    return secreto;
}

//obtener dato ingresado por usuario y llamar funcion validarNumero
function verificarIntento() {
    //capturar lo que el usuario ingresó en el input
    let numeroUsuario = parseInt(document.getElementById('numUsuario').value);
    console.log(`numero usuario: ${numeroUsuario}`);
    validarNumero(numeroSecreto, numeroUsuario);
    //return numeroUsuario;
}

function validarNumero(numSecreto, numUser){
    console.log(numeroSecreto);
    console.log(numeroIntentos);
    if(numSecreto === numUser){
        asignarTextoElemento('p', `Felicidades acertaste el número en ${numeroIntentos} ${numeroIntentos == 1 ? "intento" : "intentos"}`)

        //activar el boton reiniciar al encontrar el numero
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else {
        
        if (numeroSecreto < numUser){
            asignarTextoElemento('p', `El número es menor`);
        }else{
            asignarTextoElemento('p', `El número es mayor`);
        }
        numeroIntentos++;
        limpiarCampo();  
    }
    
      
    
}

//funcion para limpiar campo cada que ingreso un nuevo dato
function limpiarCampo(){
    document.querySelector('#numUsuario').value = '';
    
}

//solo se debe activar despues de que el usuario acierte el numero
function reiniciarJuego(){
    //limpiar campo
    limpiarCampo();

    //reiniciar intentos
    numeroIntentos = 1;

    //actualizar texto del parrafo
    asignarTextoElemento('p', "Indica un número del 1 al 10");
    
    //generar un nuevo numero secreto
    numeroSecreto = parseInt(calcularNumeroSecreto(min, max));

    //volver a desactivar el boton de reiniciarJuego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

//alert(`Lo siento, fallaste¡¡ el número era ${numSecreto}`)

