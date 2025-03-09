document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutations, obs) => {
      const openCartBtn = document.getElementById("openCart");
      const closeCartBtn = document.getElementById("closeCartModal");
      const cartModal = document.getElementById("cartModal");

      if (openCartBtn && closeCartBtn && cartModal) {
          // Evento para abrir el modal
          openCartBtn.addEventListener("click", () => {
              cartModal.classList.add("show");
          });

          // Evento para cerrar el modal
          closeCartBtn.addEventListener("click", () => {
              cartModal.classList.remove("show");
          });

          // Cerrar modal al hacer clic fuera del contenido
          cartModal.addEventListener("click", (event) => {
              if (event.target === cartModal) {
                  cartModal.classList.remove("show");
              }
          });

          obs.disconnect(); // Detener la observación una vez que se encuentran los elementos
      }
  });

  // Observar cambios en el `body` ya que el navbar y el modal pueden ser insertados dinámicamente
  observer.observe(document.body, { childList: true, subtree: true });
});




