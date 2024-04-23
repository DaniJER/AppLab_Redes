let formularioGet = [];
let formularioPost = [];

const registrarForm1 = () => {
    let nombreRegistrado1 = document.getElementById('name1').value;
    let usuarioRegistrado1 = document.getElementById('userName1').value;
    let passRegistrada1 = document.getElementById('password1').value;

    formularioGet.push(nombreRegistrado1, usuarioRegistrado1, passRegistrada1);

    console.log(localStorage.setItem('nombre1', nombreRegistrado1));
    console.log(localStorage.setItem('usuario1', usuarioRegistrado1));
    console.log(localStorage.setItem('contraseña1', passRegistrada1));

    console.log(formularioGet);
}

const registrarForm2 = () => {
    let nombreRegistrado2 = document.getElementById('name2').value;
    let usuarioRegistrado2 = document.getElementById('userName2').value;
    let passRegistrada2 = document.getElementById('password2').value;

    formularioPost.push(nombreRegistrado2, usuarioRegistrado2, passRegistrada2);

    console.log(localStorage.setItem('nombre2', nombreRegistrado2));
    console.log(localStorage.setItem('usuario2', usuarioRegistrado2));
    console.log(localStorage.setItem('contraseña2', passRegistrada2));

    console.log(formularioPost);
}

let botonEnviarForm1 = document.getElementById('dataForm1');
botonEnviarForm1.addEventListener('click', registrarForm1);

let botonEnviarForm2 = document.getElementById('dataForm2');
botonEnviarForm2.addEventListener('click', registrarForm2);
