export const cardComponent = (imageUrl, title, description, price) => {
  
    return `
    <div class="product-card">
        <div class="card-header">
            <h2>${title}</h2>
            <img src="${imageUrl}" alt="${title}" class="product-image">
        </div>
        <div class="Descripción">
            
            <p>${description}</p>
        </div>
        <div class="card-footer">
            <p class="price">$${price}</p>
            <button class="btn btn-quit">-</button>
            <p class="quantity">0</p>
            <button class="btn btn-add"}>+</button>
             <button class="btn btn-cart">Añadir al carrito</button>
        </div>
    </div>
    `
}

