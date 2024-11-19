const url = `http://127.0.0.1:5500/`

// Array de objetos con las direcciones y títulos de las páginas
export const navElements = [
    { title: 'Inicio', link: 'index.html' },
    { title: 'Logout', link: 'logout.html' },
    { title: 'Ingreso', link: 'login.html' },
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
                                 // Si el título es "Logout", le asignamos un id específico
                                const idAttr = e.title === 'Logout' ? 'id="logoutButton"' : '';
                                return `
                                <li><a  class="link" href="${e.link}" ${idAttr}>${e.title}</a></li>
                                `
                            }).join('')//unificar todo como una sola linea de string 

                    
                        }
                    </ul>
                </nav>
                <button class="registro-btn" onclick="window.location.href='registro.html'">Registrarse</button>
                `

                /*antes de importar hay que exportar*/