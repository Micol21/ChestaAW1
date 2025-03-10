import { traerDatosFetch } from '../../api/dataManager.js'; 

// Obtener el parámetro "id" de la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Referencia al contenedor donde se mostrarán los detalles
const productoDetalle = document.getElementById('producto-detalle');

// Traer los productos desde la fuente de datos (API o lista local)
traerDatosFetch(null, (productos) => {
    // Buscar el producto con el ID proporcionado en la URL
    const producto = productos.find(item => item.id === productId);

    if (producto) {
        // Si el producto existe, generar el HTML para mostrar los detalles
        productoDetalle.innerHTML = `
            <h1>${producto.title}</h1>
            <img src="${producto.imageUrl}" alt="${producto.title}" class="product-image">
            <p>${producto.description}</p>
            <p class="price">Precio: $${producto.price}</p>
            <button class="btn btn-add" data-id="${producto.id}">Añadir al carrito</button>
        `;
    } else {
        // Si el producto no existe, mostrar un mensaje de error
        productoDetalle.innerHTML = `<p>Producto no encontrado.</p>`;
    }
});
