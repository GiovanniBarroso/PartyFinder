"use strict"

let edad = alert('Esta pagina es para mayores de 18 años, pulsa el boton de aceptar si usted es mayor de edad.');

function verificarEdad() {
    var respuesta = confirm("¿Eres mayor de edad?");

    if (respuesta) {
        alert("Eres mayor de edad. Puedes continuar.");
    } else {
        alert("Eres menor de edad. No puedes continuar.");
    }
}


