// Escuchar el evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita  que el formulario se envíe de manera tradicional (recargando la página).

    // Obtener los valores de email y password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('../../../api/users.json').then(res => res.json()).then(users =>{
        const user = users.find(e => e.email === email && e.pass === password)//convierte el objeto user a una cadena para almacenarlo en sessionStorage

        // Validar los datos ingresados (simulación de autenticación)
    if (user) {
        console.log(user);
        //Agregar al Session Storage la información del usuario
        sessionStorage.setItem('userData', JSON.stringify(user))//TODA LA INFO SE GUARDA EN STRING
        //guarda la información del usuario logueado bajo la clave 'userData'.
        
        window.location.href = "../../../index.html";// Autenticación exitosa: redireccionar a la página principal
    } else {
        // Mostrar un mensaje de error si las credenciales no son correctas
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
    })

    
});


const getUserData = (key)=> {
    return JSON.parse(sessionStorage.getItem(key))
}

// Obtener la información del usuario logueado
const userInfo = getUserData('userData');
console.log(userInfo); // Muestra la información del usuario en la consola


//funcion logout(se eliminan los datos del usuario y se redirige a que se logueé)
const logout = (key)=>{
    sessionStorage.removeItem(key);
}





