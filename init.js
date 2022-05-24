//Singleton con las cuentas de usuario
//Validación de la sesion del usuario
//Sesion del usuario logeado
//Obtención de usuario

const EXPIRATION_TIME = 500000;
const userAccounts = [
  {
    name: "Deyanira Trinidad Alvarez Villajuana",
    user: "deya",
    cash: 5000,
    password: "1234abcd",
    expiration: "No"
  }
];

//Singleton que usa el localstorage para traerse datos del usuario
function getUsers() {
  let users = localStorage.getItem('userAccounts');
  if (users == undefined || users == null) {
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
    users = localStorage.getItem('userAccounts');
  }
  return JSON.parse(users);
}

//validación regresa error o regresa correcto (true o false)
function validUser(user, password) {
  let userObject;
  let users = getUsers();
  users.forEach(element => {
    if (element.user == user && element.password == password) {
      userObject = element;
      return;
    }
  });
  return userObject;  
}

//vamos a recibir un objeto de usuario y lo vamos a guardar en localStorage
function createSession(user) {
  user.expiration = Date.now();
  localStorage.setItem('user', JSON.stringify(user));
}

//limpia una session en el localstorage
function closeSession() {
  localStorage.removeItem('user');
}

//obtiene una session en el localstorage
function getSession() {
  return JSON.parse(localStorage.getItem('user'));
}

//Revisar si una sesion aun sigue activa
function checkExpiration() {
  let user = getSession();
  //Comparacion para validar una sesion en milisegundos 
  if ((user.expiration + EXPIRATION_TIME) <= Date.now()) {//Date.now() nos regresa el tiempo actual en milisegundos
    return false;
  } else {
    return true;
  }
}

//Actualiza los valores del usuario para que la base de datos tenga los nuevos datos
function updateUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
  let accounts = getUsers();
  //recorremos el arreglo de cuentas para encontrar el usuario actualizado
  accounts.forEach(element => {
    if (element.user == user.user && element.password == user.password) {//Compara usuario y cuentas
      element.name = user.name;
      element.user = user.user;
      element.cash = user.cash;
      element.password = user.password;
      element.expiration = user.expiration;
    }
  });
  //Actualiza el valor del localstorage que simula la base de datos
  localStorage.setItem('userAccounts', JSON.stringify(accounts));
}

getUsers();