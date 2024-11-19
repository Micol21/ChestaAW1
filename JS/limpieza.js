/*const jsoncontainer = document.getElementById('jsonContainer')

fetch('../productos.json').then(res => res.json()).then(data => {
    const jsonFormt = JSON.stringify(data)//vamos a transformarla en json
    console.log(data)//me lo presenta como un array de objetos
    jsoncontainer.textContent = jsonFormt
})*/

import { cardComponent } from "./cards.js";

let cardContainer = document.getElementById('cardContainer')





// Traemos los datos desde el archivo JSON
fetch('../productos.json') 
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => {
    

    // Buscamos los productos de la categoría "Limpieza" (puedes cambiar esto dependiendo de la categoría que desees mostrar)
    const categoriaLimpieza = data.categorias.find(categoria => categoria.nombre === "Limpieza");

    if (categoriaLimpieza) {
      // Llamamos a la función que muestra los productos de la categoría "Limpieza"
      mostrarProductos(categoriaLimpieza.productos);
    } else {
      console.error("No se encontraron productos para la categoría 'Limpieza'");
    }
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para mostrar los productos en el contenedor
function mostrarProductos(productos) {
  // Limpiamos el contenedor antes de agregar las tarjetas
  cardContainer.innerHTML = ''; 

  // Creamos las tarjetas para cada producto utilizando la función cardComponent
  productos.forEach(producto => {
    const cardHTML = cardComponent(producto.imageUrl, producto.title, producto.description, producto.price);
    cardContainer.innerHTML += cardHTML;
  });

  // Después de insertar las tarjetas, añadir los eventos de los botones de cantidad
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card, index) => {
    const addButton = card.querySelector('.btn-add');
    const quitButton = card.querySelector('.btn-quit');
    const quantityDisplay = card.querySelector('.quantity');

    let quantity = 0;

    // Evento para aumentar la cantidad
    addButton.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    // Evento para disminuir la cantidad
    quitButton.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  });
}