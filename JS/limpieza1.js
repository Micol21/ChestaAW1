import { cardComponent } from "./cards.js";

let cardContainer = document.getElementById('cardContainer')



//imageUrl, title, description, price
let carData = [
        { imageUrl: '/Formulario Basico/assets/img/gellimpiezaloreal.webp',
        title: "'LOREAL PARIS gel de limpieza" , 
        description: "El Gel de Limpieza Revitalift de Ácido Hialurónico y Ácido Salicílico constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia y fresca.",
        price: "7945"
        },
        {  imageUrl: '/Formulario Basico/assets/img/gellimpiezaloreal.webp',
        title: "'LOREAL PARIS gel de limpieza" , 
        description: "El Gel de Limpieza Revitalift de Ácido Hialurónico y Ácido Salicílico constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia y fresca.",
        price: "7945"
       },
       { imageUrl: '/Formulario Basico/assets/img/gellimpiezaloreal.webp',
        title: "'LOREAL PARIS gel de limpieza" , 
        description: "El Gel de Limpieza Revitalift de Ácido Hialurónico y Ácido Salicílico constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia y fresca.",
        price: "7945"
       },
       { imageUrl: '/Formulario Basico/assets/img/gellimpiezaloreal.webp',
        title: "'LOREAL PARIS gel de limpieza" , 
        description: "El Gel de Limpieza Revitalift de Ácido Hialurónico y Ácido Salicílico constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia y fresca.",
        price: "7945"
       }
]



// listemer de evento se ejecuta cuando la página ha cargado completamente
window.addEventListener('load', () => {
    // Creamos las tarjetas y las insertamos
    //el map crea un nuevo array con objetos (cardHTML, index)
    const cards = carData.map((e, index) => {
      const cardHTML = cardComponent(e.imageUrl, e.title, e.description, e.price);
      return { cardHTML, index };  // Pasamos el índice para identificar la tarjeta
    });
    
    // Agregamos las tarjetas al contenedor
    cardContainer.innerHTML = cards.map(c => c.cardHTML).join('');
    
    // Después de insertar el HTML, añadimos los eventos de los botones
    const addButtons = document.querySelectorAll('.btn-add');
    const quitButtons = document.querySelectorAll('.btn-quit');
    const quantityDisplays = document.querySelectorAll('.quantity');
    
    addButtons.forEach((btn, idx) => {
      let quantity = 0;
      btn.addEventListener('click', () => {
        quantity++;
        quantityDisplays[idx].textContent = quantity;
      });
    });
  
    quitButtons.forEach((btn, idx) => {
      let quantity = 0;
      btn.addEventListener('click', () => {
        if (quantity > 0) {
          quantity--;
          quantityDisplays[idx].textContent = quantity;
        }
      });
    });
  });


