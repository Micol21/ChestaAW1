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
            <div class="product-container">
        <div class="product-image-container">
        <img src="${producto.imageUrl}" alt="${producto.title}" class="product-image">
        </div>
        <div class="product-details">
        <p class="company-name">Sneaker Company</p>
        <h1 class="product-title">${producto.title}</h1>
        <p class="product-description">${producto.description}</p>
        <div class="product-pricing">
            <span class="current-price">$${producto.price}</span>
            </div>
            <div class="product-quantity">
            <button class="quantity-decrease">-</button>
            <span class="quantity-value">0</span>
            <button class="quantity-increase">+</button>
            </div>
        <button class="add-to-cart-btn" data-id="${producto.id}">Añadir al carrito</button>
    </div>
</div>

        `;
    } else {
        // Si el producto no existe, mostrar un mensaje de error
        productoDetalle.innerHTML = `<p>Producto no encontrado.</p>`;
    }
});
