let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function clicBotonConsole(){
    alert('El botón fue clicado');
}

function clicBotonPromt(){
    let ciudad = prompt("Ingresa una ciudad de Brasil: ");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clicBotonAlert(){
    alert("Yo amo JS");
}

function clicBotonSuma(){
    let num1 = parseInt(prompt("Ingrese primer numero: "));
    let num2 = parseInt(prompt("Ingrese segundo numero: "));
    let suma = num1 + num2;
    alert(`El resultado de la suma de ${num1} y ${num2} es ${suma}`);
}


function saludo(){
    console.log("¡Hola, mundo!");
}

function nombre(nombreUsuario){
    console.log(`hola ${nombreUsuario}`);
}

function calcularDoble(num){
    return num * 2;
}

function calcularPromedio(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

function calcularMayor(dato1, dato2){
    /*if(dato1 > dato2){
        return dato1;
    }else {
        return dato2;
    }*/
    return dato1 > dato2 ?  dato1 : dato2;
    
}

function cuadrado(numero){
    return numero * numero;
}