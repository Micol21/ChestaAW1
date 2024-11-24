import { cardComponent } from "../components/cards.js";

let cardContainer = document.getElementById('cardContainerHidratacion');

// Traemos los datos desde el archivo JSON
fetch('../../DATA/productos.json') 
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => {
    // Buscamos los productos de la categoría "Hidratación"
    const categoriaHidratacion = data.categorias.find(categoria => categoria.nombre === "Hidratación");

    if (categoriaHidratacion) {
      // Llamamos a la función que muestra los productos de la categoría "Hidratación"
      mostrarProductos(categoriaHidratacion.productos);
    } else {
      console.error("No se encontraron productos para la categoría 'Hidratación'");
    }
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para mostrar los productos en el contenedor
function mostrarProductos(productos) {
  // Limpiamos el contenedor antes de agregar las tarjetas
  cardContainer.innerHTML = ''; 

  // Creamos las tarjetas para cada producto utilizando la función cardComponent
  productos.forEach(producto => {
    const cardHTML = cardComponent(producto.id,producto.imageUrl, producto.title, producto.description, producto.price);
    cardContainer.innerHTML += cardHTML;
});

 
  // Después de insertar las tarjetas, añadir los eventos de los botones de cantidad
  const addButtons = document.querySelectorAll('.btn-add');
  const quitButtons = document.querySelectorAll('.btn-quit');
  
  
  // Añadir eventos a los botones de "sumar"
  addButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      const quantityElement = document.querySelector(`.quantity[data-id="${productId}"]`);
      let quantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = quantity + 1;
    });
  });

  // Añadir eventos a los botones de "restar"
  quitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      const quantityElement = document.querySelector(`.quantity[data-id="${productId}"]`);
      let quantity = parseInt(quantityElement.textContent, 10);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
      }
    });
  });
}
