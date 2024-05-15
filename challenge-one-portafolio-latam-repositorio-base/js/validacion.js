//Haz tú validación en javascript acá

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener("DOMContentLoaded", function() {
    var formularioContacto = document.getElementById("formulario-contacto");

    formularioContacto.addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var mensaje = document.getElementById("mensaje").value;

        if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
            alert("Por favor complete todos los campos obligatorios.");
            event.preventDefault();
        } else if (!validateEmail(correo)) {
            alert("Por favor ingrese una dirección de correo electrónico válida.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
