let edadUsuario = prompt("Por favor, ingresa tu edad:");

// Verificar si el usuario puede entrar a la web
if (edadUsuario >= 18) {
    alert("¡Bienvenido/a a nuestra web!");

} else {
    if (edadUsuario >= 0 && edadUsuario <= 3) {
        window.location.href = "https://www.dodot.es/";
    } else if (edadUsuario >= 4 && edadUsuario <= 6) {
        window.location.href = "https://www.pocoyo.com/";
    } else if (edadUsuario >= 7 && edadUsuario <= 12) {
        window.location.href = "https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki";
    } else if (edadUsuario >= 13 && edadUsuario <= 17) {
        window.location.href = "https://www.lego.com/";
    }
}