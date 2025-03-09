import { traerDatosFetch } from '../../api/dataManager.js';
import { cardComponent } from "../../components/card.component.js";

// Obtener el parámetro de la categoría de la URL
const params = new URLSearchParams(window.location.search);//window.location.search obtiene la parte de la URL después del ?
//new URLSearchParams(...) permite leer los parámetros de la URL.
const categoria = params.get("categoria");

// Referencias a elementos del DOM
const titulo = document.getElementById("categoriaTitulo");
const cardContainer = document.getElementById("cardContainer");


// Variable global para almacenar los productos
let productos = [];  // Aquí se inicializa la variable

// Si hay una categoría en la URL, actualizar el título y cargar los productos
if (categoria) {
    titulo.textContent = categoria;

    traerDatosFetch(categoria, (data) => {
        console.log("Productos obtenidos:", data); 
        productos = data;
        cardContainer.innerHTML = ''; // Limpiar antes de agregar productos
        

        productos.forEach(producto => {
            const cardHTML = cardComponent(
                producto.id,
                producto.imageUrl,
                producto.title,
                producto.description,
                producto.price
            );
            cardContainer.innerHTML += cardHTML;
        });

        // Agregar eventos a los botones de las cards
        addEventListenersToCards();
    });
} else {titulo.textContent = "Categoría no encontrada";}

// Función para agregar eventos a los botones de las cards
function addEventListenersToCards() {
    const addButtons = cardContainer.querySelectorAll('.btn-add');
    const quitButtons = cardContainer.querySelectorAll('.btn-quit');
    const cartButtons = cardContainer.querySelectorAll('.btn-cart');

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
            const productId = event.target.getAttribute('data-id');//el producto que se selecciona
            const quantityElement = cardContainer.querySelector(`.quantity[data-id="${productId}"]`);//la cantidad de ese producto
            let quantity = parseInt(quantityElement.textContent, 10);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
            }
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            const quantityElement = cardContainer.querySelector(`.quantity[data-id="${productId}"]`);
            const quantity = parseInt(quantityElement.textContent, 10);
    
            if (quantity > 0) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingProduct = cart.find(item => item.id === parseInt(productId));
    
                let product;

                if (existingProduct) {
                    existingProduct.quantity += quantity;
                    product = existingProduct;
                } else {
                    product = productos.find(item => item.id === parseInt(productId));
                    
                    if (product) { // Verificar que product no sea undefined
                        cart.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            quantity: quantity,
                            imageUrl: product.imageUrl,
                        });
                    } else {
                        console.error(`Producto con ID ${productId} no encontrado.`);
                        alert("Hubo un problema al añadir el producto al carrito.");
                        return; // Salir de la función si el producto no existe
                    }
                }
    
                localStorage.setItem('cart', JSON.stringify(cart));
                quantityElement.textContent = 0;
                alert(`${quantity} unidad(es) de "${product.title}" añadida(s) al carrito.`);
            } else {
                alert('Por favor, selecciona una cantidad antes de añadir al carrito.');
            }
        });
    });
    
}
