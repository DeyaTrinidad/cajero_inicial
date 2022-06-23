//Primero recopilo datos en la pantalla de login
//Segundo valido datos correctos
//Tercero redirecciono a pagina de banco
//Cuarto realizo el manejo de errores


function validateLogin() {
  //saco valores de inputs (los valores se obtienen como texto)
  let userName = document.getElementById("user-id").value; 
  let password = document.getElementById("password").value;

  //valido si lo que escribieron es un usuario valido
  let user = validUser(userName, password); //false o un usuario
  //que hacer en caso de que sea valido o no
  if (user) {
    createSession(user);//creo la sesion para la cuenta del banco
    window.location.href = "bank-account.html";
  } else {
    alert("Usuario inexistente");
  }
}

document.getElementById("submit").addEventListener("click", validateLogin);