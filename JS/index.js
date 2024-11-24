import { navBarComponent } from "./navbar.js";



let navContainer = document.querySelector('header')//variable donde esta guardao el header

 

// Función para cargar el navBar y agregar el evento de logout(se eliminan los datos del storage y se redirecciona al login)
function loadNavBar() {
    // Verificar si la página actual no es login.html
    if (!window.location.pathname.includes('login.html')) {
    navContainer.innerHTML = navBarComponent;//llena el header con el navbar
}
    const logoutButton = document.getElementById("btnLogout");
            if (logoutButton) {
                logoutButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    window.location.href = "login.html";
                    logout('userData');
                });
            }
    }


    // Asegurarse de que el DOM esté completamente cargado antes de agregar EventListeners
        document.addEventListener('DOMContentLoaded', function () {
            checkAuthentication();
        });


    // Función para verificar si el usuario está logueado
    function checkAuthentication() {

    // Obtener los datos del usuario desde sessionStorage
    const userData = sessionStorage.getItem('userData');


     // Si no hay datos del usuario (usuario no logueado) y no estamos en la página de login, redirigir a login.html
    if (!userData && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    } else if (!userData) {
        // Si no hay datos del usuario (usuario no logueado), agregar un EventListener al botón "Regístrate"
        const btnRegister = document.getElementById('btnRegister');

        if (btnRegister) {
            btnRegister.addEventListener('click', function () {
                window.location.href = 'registro.html';
            });
        }
    } else {
        // Si está autenticado y no estamos en login.html, cargar el navBar
        loadNavBar();
    }
}

// Ejecutar la función loadNavBar al cargar la página
window.addEventListener('load', checkAuthentication);








