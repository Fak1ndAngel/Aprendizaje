if (sessionStorage.getItem('usuario')) {
    
    let usuario = sessionStorage.getItem('usuario');

    let userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = 'hola, ' + usuario + '!';

} else {
    window.location.href = 'login.html';
}