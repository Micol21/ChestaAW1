import { navBarComponent } from "./navbar.js";



let navContainer = document.querySelector('header')//variable donde esta guardao el header

 

// Función para cargar el navBar y agregar el evento de logout
function loadNavBar() {
    navContainer.innerHTML = navBarComponent;//llena el header con el navbar
    const logoutButton = document.getElementById("logoutButton");
            if (logoutButton) {
                logoutButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    window.location.href = "login.html";
                });
            }
    }

// Ejecutar la función loadNavBar al cargar la página
window.addEventListener('load', loadNavBar);





