// Escuchar el evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita  que el formulario se envíe de manera tradicional (recargando la página).

    // Obtener los valores de email y password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validar los datos ingresados (simulación de autenticación)
    if (email === "user@example.com" && password === "password123") {
        // Autenticación exitosa: redireccionar a la página principal
        window.location.href = "index.html";
    } else {
        // Mostrar un mensaje de error si las credenciales no son correctas
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});




