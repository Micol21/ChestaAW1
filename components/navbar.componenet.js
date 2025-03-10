

// Array de objetos con las direcciones y títulos de las páginas
export const navElements = [
    { title: 'Inicio', link: '/index.html' },
    { title: 'Buscar un producto', link: '/pages/navbar/buscarunproducto.html' }, 
    { title: 'Afecciones de la piel', link: '/pages/navbar/afecciones.html' },
    { title: 'Preguntas Frecuentes', link: '/pages/navbar/PreguntasFrecuentes.html' },
    { title: 'Sobre Nosotros', link: '/pages/navbar/SobreNosotros.html' },
]

export const navBarComponent = `
                <nav>
                    <ul class="nav-links">
                       
                        ${
                            navElements.map(e =>{
                                 
                                return `
                                <li><a  class="link" href="${e.link}" >${e.title}</a></li>
                                `
                            }).join('')//unificar todo como una sola linea de string 

                    
                        }
                    </ul>
                </nav>
                
                <button id="openCart" class="cart-btn"> Ver Carrito</button>


                
                
                `

                /*antes de importar hay que exportar*/