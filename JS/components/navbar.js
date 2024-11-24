

// Array de objetos con las direcciones y títulos de las páginas
export const navElements = [
    { title: 'Inicio', link: 'index.html' },
    { title: 'Buscar un producto', link: 'buscarunproducto.html' },
    { title: 'Afecciones de la piel', link: 'afecciones.html' },
    { title: 'Preguntas Frecuentes', link: 'Preguntas Frecuentes.html' },
    { title: 'Sobre Nosotros', link: 'SobreNosotros.html' },
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
                
                <button class="logout-btn" id="btnLogout"> Logout</button>
                `

                /*antes de importar hay que exportar*/