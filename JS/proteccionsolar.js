import { cardComponent } from "./cards.js";

let cardContainer = document.getElementById('cardContainerProteccion');

// Traemos los datos desde el archivo JSON
fetch('../DATA/productos.json') 
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => {
    // Buscamos los productos de la categoría "Protección Solar"
    const categoriaProteccionSolar = data.categorias.find(categoria => categoria.nombre === "Protección Solar");

    if (categoriaProteccionSolar) {
      // Llamamos a la función que muestra los productos de la categoría "Protección Solar"
      mostrarProductos(categoriaProteccionSolar.productos);
    } else {
      console.error("No se encontraron productos para la categoría 'Protección Solar'");
    }
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para mostrar los productos en el contenedor
function mostrarProductos(productos) {
    // Limpiamos el contenedor antes de agregar las tarjetas
    cardContainer.innerHTML = ''; 
  
    // Creamos las tarjetas para cada producto utilizando la función cardComponent
    productos.forEach(producto => {
      const cardHTML = cardComponent(producto.id, producto.imageUrl, producto.title, producto.description, producto.price);
      cardContainer.innerHTML += cardHTML;
    });
  
    // Configurar eventos después de agregar las tarjetas
    configurarEventosDeBotones();
  
    // Añadir los eventos de los botones de cantidad
    const addButtons = document.querySelectorAll('.btn-add');
    const quitButtons = document.querySelectorAll('.btn-quit');
    
    // Iterar sobre cada tarjeta de producto para asignar eventos individuales
    addButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Obtener el contenedor de la tarjeta actual
        const productCard = btn.closest('.product-card');
        const quantityDisplay = productCard.querySelector('.quantity');
  
        // Obtener la cantidad actual, incrementarla y actualizar la visualización
        let currentQuantity = parseInt(quantityDisplay.textContent);
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
      });
    });
  
    quitButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Obtener el contenedor de la tarjeta actual
        const productCard = btn.closest('.product-card');
        const quantityDisplay = productCard.querySelector('.quantity');
  
        // Obtener la cantidad actual, decrementar si es mayor a 0 y actualizar la visualización
        let currentQuantity = parseInt(quantityDisplay.textContent);
        if (currentQuantity > 0) {
          currentQuantity--;
          quantityDisplay.textContent = currentQuantity;
        }
      });
    });
  }
