function configurarEventosDeBotones() {
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach((card) => {
      const addButton = card.querySelector('.btn-add');
      const quitButton = card.querySelector('.btn-quit');
      const cartButton = card.querySelector('.btn-cart');
      const quantityDisplay = card.querySelector('.quantity');
  
      // Inicializar la cantidad en 0 directamente en el texto
      quantityDisplay.textContent = '0';
  
      // Evento para sumar la cantidad
      addButton.addEventListener('click', () => {
        // Leer la cantidad actual directamente del elemento de texto
        let currentQuantity = parseInt(quantityDisplay.textContent);
        currentQuantity++; // Aumentar la cantidad
        quantityDisplay.textContent = currentQuantity; // Actualizar la visualización de la cantidad
      });
  
      // Evento para restar la cantidad
      quitButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        if (currentQuantity > 0) {
          currentQuantity--; // Decrementar la cantidad
          quantityDisplay.textContent = currentQuantity; // Actualizar la visualización de la cantidad
        }
      });
  
      // Evento para añadir al carrito
      cartButton.addEventListener('click', () => {
        const productId = parseInt(cartButton.getAttribute('data-id'));
        const productTitle = card.querySelector('.card-header h2').textContent;
        const productPrice = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
        const productImage = card.querySelector('.product-image').getAttribute('src');
        const quantity = parseInt(quantityDisplay.textContent); // Obtener la cantidad desde la visualización
  
        // Crear el producto a agregar
        const selectedProduct = {
          id: productId,
          title: productTitle,
          price: productPrice,
          imageUrl: productImage,
          quantity: quantity // Asegurarse de que la cantidad esté incluida
        };
  
        if (quantity > 0) {
          agregarProductoAlCarrito(selectedProduct);
          quantityDisplay.textContent = '0'; // Reiniciar la visualización de la cantidad
        } else {
          alert('Por favor, seleccione al menos una unidad del producto.');
        }
      });
    });
  }
  
  function agregarProductoAlCarrito(product) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Comprobar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === product.id);
  
    if (productoExistente) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      productoExistente.quantity += product.quantity;
    } else {
      // Si no está, agregarlo
      carrito.push(product);
    }
  
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  
  