function loguear()
{
          

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;
   

    if(user=="fabian" && pass=="JamasNever") { 
       sessionStorage.setItem("usuario", user)
        window.location="blog.html";
 }

else
       
       {

        alert("datos incorrectos")

 }}

 



