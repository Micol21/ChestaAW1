export function traerDatosFetch(nombreCategoria, callback) {
    fetch('/api/productos.json') 
      .then(response => response.json())
      .then(data => {
        const categoria = data.categorias.find(categoria => categoria.nombre === nombreCategoria);
        if (categoria) {
          callback(categoria.productos);//una vez que encuentra los productos se los pasa al callback como argumento
        } else {
          console.error(`No se encontraron productos para la categoría '${nombreCategoria}'`);
        }
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  