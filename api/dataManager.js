export function traerDatosFetch(nombreCategoria, callback) {
  fetch('/api/productos.json') 
      .then(response => response.json())
      .then(data => {
          if (nombreCategoria === null) {
              // Si la categoría es null, devolver todos los productos
              const todosLosProductos = data.categorias.flatMap(categoria => categoria.productos);
              callback(todosLosProductos);
          } else {
              const categoria = data.categorias.find(categoria => categoria.nombre === nombreCategoria);
              if (categoria) {
                  callback(categoria.productos); // Pasa los productos de la categoría al callback
              } else {
                  console.error(`No se encontraron productos para la categoría '${nombreCategoria}'`);
              }
          }
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

  