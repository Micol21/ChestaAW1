import { cardComponent } from "./cards.js";

let cardContainer = document.getElementById('cardContainerSerums');

// Traemos los datos desde el archivo JSON
fetch('../productos.json') 
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => {
    // Buscamos los productos de la categoría "Serums"
    const categoriaSerums = data.categorias.find(categoria => categoria.nombre === "Serums");

    if (categoriaSerums) {
      // Llamamos a la función que muestra los productos de la categoría "Serums"
      mostrarProductos(categoriaSerums.productos);
    } else {
      console.error("No se encontraron productos para la categoría 'Serums'");
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
  const addButtons = document.querySelectorAll('.btn-add');
  const quitButtons = document.querySelectorAll('.btn-quit');
  const quantityDisplays = document.querySelectorAll('.quantity');
  
  addButtons.forEach((btn, idx) => {
    let quantity = 0;
    btn.addEventListener('click', () => {
      quantity++;
      quantityDisplays[idx].textContent = quantity;  // Actualizamos la cantidad
    });
  });

  quitButtons.forEach((btn, idx) => {
    let quantity = 0;
    btn.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplays[idx].textContent = quantity;  // Actualizamos la cantidad
      }
    });
  });
}
