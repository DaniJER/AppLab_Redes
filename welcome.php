<?php

    // Almacenando los datos del primer formulario con método GET
    $name1 = isset($_REQUEST['name1']) ? $_REQUEST['name1'] : '';
    $userName1 = isset($_REQUEST['userName1']) ? $_REQUEST['userName1'] : '';
    $pass1 = isset($_REQUEST['password1']) ? $_REQUEST['password1'] : '';

    // Almacenando los datos del segundo formulario con método POST
    $name2 = isset($_REQUEST['name2']) ? $_REQUEST['name2'] : '';
    $userName2 = isset($_REQUEST['userName2']) ? $_REQUEST['userName2'] : '';
    $pass2 = isset($_REQUEST['password2']) ? $_REQUEST['password2'] : '';

    echo "El nombre es: $name1, mi nombre de usuario es $userName1, y mi contraseña es: $pass1";

    echo "Nombre: $name2, nombre de usuario: $userName2, contraseña: $pass2";

?>
