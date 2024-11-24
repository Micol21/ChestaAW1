document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    
    // Simular cargar datos iniciales desde users.json a localStorage (esto sería en una primera carga)
    if (!localStorage.getItem('usersData')) {
        fetch('../DATA/users.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('usersData', JSON.stringify(data));
            });
    }
    
    // Manejar el evento de envío del formulario
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Capturar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        // Crear un objeto con los datos del usuario
        const newUser = {
            name: nombre,
            lastName: apellido,
            email: email,
            pass: password,
            foto: "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" // Imagen por defecto
        };

        // Obtener usuarios existentes de localStorage
        let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

        // Agregar el nuevo usuario
        usersData.push(newUser);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('usersData', JSON.stringify(usersData));

        // Redirigir al usuario a la página de login
        window.location.href = 'login.html';
    });
});

