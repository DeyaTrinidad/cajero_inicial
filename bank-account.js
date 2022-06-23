//Primero obtengo datos por parte de login
//Segundo se calculan cuentas bancarias
//Tercero se muestran datos en pantalla con Javascript
//Cuarto se actualizan cookies con nuevos datos bancarios
//Quinto fin de sesion y regreso a login
//Sexto se validan errores

//Se cargan los datos del usuario en sessión
function loadUserData() {
  //Obtengo session de usuario
  let user = getSession();
  //Pinto datos en pantalla
  document.getElementById("user-name").innerHTML = user.name;
  document.getElementById("user-cash").innerHTML = user.cash;
  //Agrego funciones a los botones
  document.getElementById("btn-depositar").addEventListener("click", deposit);
  document.getElementById("btn-retirar").addEventListener("click", withdraw);
}

function updateUserCash(cash) {
  let user = getSession();
  user.cash = cash;
  updateUser(user);
  user = getSession();
  return user;
}

function deposit() {
  //condiciones/ reglas
  //Suma del monto del usaurio
  let dinerin = document.getElementById("cash").value;
  let user = getSession();
  let suma = user.cash + parseInt(dinerin);
  if (suma > 50000) {
    //mandar error
    alert("Una cuenta no puede revasar 50000")
  } else {
    //actualizar el usuario
    user = updateUserCash(suma);
    document.getElementById("user-cash").innerHTML = user.cash;
  }
}

function withdraw() {
}


loadUserData();
