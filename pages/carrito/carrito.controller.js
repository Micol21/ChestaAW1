document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutations, obs) => {
      const openCartBtn = document.getElementById("openCart");
      const closeCartBtn = document.getElementById("closeCartModal");
      const cartModal = document.getElementById("cartModal");

      if (openCartBtn && closeCartBtn && cartModal) {
          // Evento para abrir el modal
          openCartBtn.addEventListener("click", () => {
              console.log("Abrir carrito");
              cartModal.classList.add("show");
              cartModal.style.display = "flex"; 
          });

          // Evento para cerrar el modal
          closeCartBtn.addEventListener("click", () => {
              console.log("Cerrar carrito");
              cartModal.classList.remove("show");
              artModal.style.display = "none";
          });

          // Cerrar modal al hacer clic fuera del contenido
          cartModal.addEventListener("click", (event) => {
              if (event.target === cartModal) {
                  
                  cartModal.classList.remove("show");
                  artModal.style.display = "none";
              }
          });

          obs.disconnect(); // Detener la observación una vez que se encuentran los elementos
      }
  });

  // Observar cambios en el `body` ya que el navbar y el modal pueden ser insertados dinámicamente
  observer.observe(document.body, { childList: true, subtree: true });
});

// Función para mostrar los productos en el modal del carrito
function mostrarCarrito() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const listaCarrito = document.querySelector("#lista-carrito tbody");
  
  // Limpiar el contenido del carrito antes de agregar productos
  listaCarrito.innerHTML = '';

  // Verificar si hay productos en el carrito
  if (cart.length === 0) {
      listaCarrito.innerHTML = '<tr><td colspan="4">El carrito está vacío.</td></tr>';
      return;
  }

  // Recorrer los productos del carrito y agregarlos al modal
  cart.forEach(product => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td><img src="${product.imageUrl}" width="50"></td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
      `;

      listaCarrito.appendChild(row);
  });
}



