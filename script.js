function validarDatos() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var mensajeError = document.getElementById("mensajeError");

    if (usuario.trim() === "" || contrasena.trim() === "") {
        mensajeError.innerHTML = "Por favor, ingrese usuario y contraseña.";
    } else {
        mensajeError.innerHTML = ""; // Limpia el mensaje de error si los campos no están vacíos
        document.getElementById("loginForm").submit(); // Envía el formulario si los campos están completos
    }
}
