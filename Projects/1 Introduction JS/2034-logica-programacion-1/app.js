//console.log("Hola Mundo"); //We don't need show by console because we have the screen, web

//alert("Alert Message"); //floating screen

//we need ask the user a number
//console.log("Please, introduce a number: ")

let numeroUsuario = 0;
let numeroSecreto;
let numeroIntentosPermitidos = 3;
let numeroIntentosUsuario = 1;
let palabraVeces = "vez";
let limiteSuperiorNumero = 5;

//calculate the secret number randomly
numeroSecreto = Math.floor(Math.random() * limiteSuperiorNumero) + 1;
//alert(`Secreto: ${numeroSecreto}`);

/*
// while conditional loop
while(numeroIntentosPermitidos != 0){
    if (numeroSecreto == numeroUsuario){
        alert(`Felicidades Adivinaste el Número que es: ${numeroSecreto}`);
    }else{
        if(numeroSecreto < numeroUsuario){
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        
    }
    numeroUsuario = prompt("Ingresa un numero, por favor: ");
    numeroIntentosPermitidos--;
}
*/

/*
// for conditional loop
for(let i = 0; i < numeroIntentosPermitidos; i++){
    if (numeroSecreto == numeroUsuario){
        alert(`Felicidades Adivinaste el Número que es: ${numeroSecreto}`);
    }else{
        if(numeroSecreto < numeroUsuario){
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        
    }
    numeroUsuario = prompt("Ingresa un numero, por favor: ");
}
*/


// while conditional loop
while(numeroSecreto != numeroUsuario && numeroIntentosUsuario <= numeroIntentosPermitidos){
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${limiteSuperiorNumero} `));

    console.log(typeof(numeroUsuario));

    if (numeroSecreto == numeroUsuario){
        //alert(`Felicidades Adivinaste el Número que es: ${numeroSecreto} Acertaste en un total de ${numeroIntentosUsuario} ${palabraVeces}`);
        //Change by ternary operator
        alert(`Felicidades Adivinaste el Número que es: ${numeroSecreto} Acertaste en un total de ${numeroIntentosUsuario} ${numeroIntentosUsuario == 1 ? "vez" : "veces"}`);

    }else{
        if(numeroSecreto < numeroUsuario){
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        numeroIntentosUsuario++;
        //When the attempts increase, then the palabraVeces variable will change
        palabraVeces = "veces";

        if(numeroIntentosUsuario > numeroIntentosPermitidos){
            alert("LLegaste al número máximo de intentos");
        }
    }
}



