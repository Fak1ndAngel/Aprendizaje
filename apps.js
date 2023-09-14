function loguear () {
    
     let usuario = document.getElementById("usuario").value;
     let clave = document.getElementById("clave").value;

    sessionStorage.setItem("usuario", usuario);
    sessionStorage.setItem("clave", clave);

    window.location.href = "blog.html";

}





