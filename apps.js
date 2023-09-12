function almacenarCredenciales (usuario, clave) {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("usuario", usuario);
        sessionStorage.setItem("clave", clave);
        console.log("credenciales almacenadas con exito.");



    } else {
        console.log("tu navegador no soporta sessionStorage. No se pueden alamacenar las credenciales.");

    }
}








