const logout = () => {
    
    sessionStorage.removeItem('usuario')    
     window.location = 'login.html'
  }
  
  const logoutButton = document.querySelector('logout')
  
  logoutButton.addEventListener('click', logout)
  
   