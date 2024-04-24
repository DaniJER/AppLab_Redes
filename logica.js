let formularioGet = [];
let formularioPost = [];

// Cargar datos previos del localStorage al iniciar la página
window.addEventListener('DOMContentLoaded', () => {
    const nombre1 = localStorage.getItem('nombre1');
    const usuario1 = localStorage.getItem('usuario1');
    const contraseña1 = localStorage.getItem('contraseña1');
    if (nombre1 && usuario1 && contraseña1) {
        document.getElementById('name1').value = nombre1;
        document.getElementById('userName1').value = usuario1;
        document.getElementById('password1').value = contraseña1;
    }

    const nombre2 = localStorage.getItem('nombre2');
    const usuario2 = localStorage.getItem('usuario2');
    const contraseña2 = localStorage.getItem('contraseña2');
    if (nombre2 && usuario2 && contraseña2) {
        document.getElementById('name2').value = nombre2;
        document.getElementById('userName2').value = usuario2;
        document.getElementById('password2').value = contraseña2;
    }
});

const registrarForm1 = () => {
    let nombreRegistrado1 = document.getElementById('name1').value.trim();
    let usuarioRegistrado1 = document.getElementById('userName1').value.trim();
    let passRegistrada1 = document.getElementById('password1').value.trim();

    // Verificar que los campos no estén vacíos antes de almacenarlos
    if (nombreRegistrado1 && usuarioRegistrado1 && passRegistrada1) {
        localStorage.setItem('nombre1', nombreRegistrado1);
        localStorage.setItem('usuario1', usuarioRegistrado1);
        localStorage.setItem('contraseña1', passRegistrada1);
    }
}

const registrarForm2 = () => {
    let nombreRegistrado2 = document.getElementById('name2').value.trim();
    let usuarioRegistrado2 = document.getElementById('userName2').value.trim();
    let passRegistrada2 = document.getElementById('password2').value.trim();

    // Verificar que los campos no estén vacíos antes de almacenarlos
    if (nombreRegistrado2 && usuarioRegistrado2 && passRegistrada2) {
        localStorage.setItem('nombre2', nombreRegistrado2);
        localStorage.setItem('usuario2', usuarioRegistrado2);
        localStorage.setItem('contraseña2', passRegistrada2);
    }
}

let botonEnviarForm1 = document.getElementById('dataForm1');
botonEnviarForm1.addEventListener('click', registrarForm1);

let botonEnviarForm2 = document.getElementById('dataForm2');
botonEnviarForm2.addEventListener('click', registrarForm2);
