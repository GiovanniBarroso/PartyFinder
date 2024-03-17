"use strict"

document.getElementById('num_personas').addEventListener('input', function() {
    var numPersonas = parseInt(this.value);
    var personasDiv = document.getElementById('personas');
    personasDiv.innerHTML = '';

    for (var i = 0; i < numPersonas; i++) {

        //para introducir nombre
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'persona_' + (i + 1);
        input.placeholder = 'Nombre de la Persona ' + (i + 1);
        input.required = true;
        personasDiv.appendChild(input);

        //para introducir dni
        var input = document.createElement('input');
        input.type = 'num';
        input.name = 'dni_' + (i + 1);
        input.placeholder = 'Dni de la Persona ' + (i + 1);
        input.required = true;
        personasDiv.appendChild(input);
    }
});