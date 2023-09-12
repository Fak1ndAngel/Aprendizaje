const usuarioLogueado = false; 

function redirigirALogin() {
  window.location.href = 'login.html'; 
}


if (sessionStorage.getItem("usuario") == null || sessionStorage.getItem("usuario") == undefined ) {
  redirigirALogin();
}
