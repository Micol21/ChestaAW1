import { navBarComponent } from "../components/navbar.componenet.js";
import { traerDatosFetch } from '../api/dataManager.js';
import { cardComponent } from "../components/card.component.js";



let navContainer = document.querySelector('header')//variable donde esta guardao el header

 

// Función para cargar el navBar y agregar el evento de logout(se eliminan los datos del storage y se redirecciona al login)
function loadNavBar() {
    // Verificar si la página actual no es login.html
    if (!window.location.pathname.includes("pages/authenticator/login/login.html")) {
    navContainer.innerHTML = navBarComponent;//llena el header con el navbar
}
    const logoutButton = document.getElementById("btnLogout");
            if (logoutButton) {
                logoutButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    window.location.href = "pages/authenticator/login/login.html";
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
    if (!userData && !window.location.pathname.includes("pages/authenticator/login/login.html")) {
        window.location.href = "pages/authenticator/login/login.html";
    } else if (!userData) {
        // Si no hay datos del usuario (usuario no logueado), agregar un EventListener al botón "Regístrate"
        const btnRegister = document.getElementById('btnRegister');

        if (btnRegister) {
            btnRegister.addEventListener('click', function () {
                window.location.href = "pages/authenticator/sigIn/registro.html";
            });
        }
    } else {
        // Si está autenticado y no estamos en login.html, cargar el navBar
        loadNavBar();
    }
}

// Ejecutar la función loadNavBar al cargar la página
window.addEventListener('load', checkAuthentication);



let cardContainerHidratacion = document.getElementById('cardContainerHidratacion');
let cardContainerLimpieza = document.getElementById('cardContainerLimpieza');
let cardContainerProteccion = document.getElementById('cardContainerProteccion');
let cardContainerSerums = document.getElementById('cardContainerSerums');


// Mostrar productos en la interfaz
function mostrarProductos(productos, cardContainer) {
    cardContainer.innerHTML = ''; 
    productos.forEach(producto => {
      const cardHTML = cardComponent(producto.id, producto.imageUrl, producto.title, producto.description, producto.price);
      cardContainer.innerHTML += cardHTML;
    });
  
    // Añadir eventos a los botones
    const addButtons = cardContainer.querySelectorAll('.btn-add');
    const quitButtons = cardContainer.querySelectorAll('.btn-quit');
  
    addButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        const quantityElement = cardContainer.querySelector(`.quantity[data-id="${productId}"]`);
        let quantity = parseInt(quantityElement.textContent, 10);
        quantityElement.textContent = quantity + 1;
      });
    });
  
    quitButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        const quantityElement = cardContainer.querySelector(`.quantity[data-id="${productId}"]`);
        let quantity = parseInt(quantityElement.textContent, 10);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
        }
      });
    });
  }
  
  // Usar la función para cargar distintas categorías
  traerDatosFetch('Hidratación', (productos) => mostrarProductos(productos, cardContainerHidratacion));//usar una función anónima (o una función flecha) que invoque mostrarProductos con los argumentos adecuados.
  traerDatosFetch('Limpieza', (productos) => mostrarProductos(productos, cardContainerLimpieza));
  traerDatosFetch('Protección Solar', (productos) => mostrarProductos(productos, cardContainerProteccion));
  traerDatosFetch('Serums', (productos) => mostrarProductos(productos, cardContainerSerums));




