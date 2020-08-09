// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgxdGJ1PsghqE7PrN-PN3EaVoP96R7J9Q",
    authDomain: "mi-nombre-b4769.firebaseapp.com",
    databaseURL: "https://mi-nombre-b4769.firebaseio.com",
    projectId: "mi-nombre-b4769",
    storageBucket: "mi-nombre-b4769.appspot.com",
    messagingSenderId: "800871146629",
    appId: "1:800871146629:web:462fce5a1c46dd184b35ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Se asigna a una variable cada elemento input con su ID
  var dni = document.getElementById('.dni');
  var nombre = document.getElementById('.nombres');
  var apaterno = document.getElementById('.a_paterno');
  var amaterno = document.getElementById('.a_materno');
  var correo = document.getElementById('.email');
  var telefono = document.getElementById('.telefono');
  var enviarData = document.getElementById('submit_button');
  var Recuperar = document.getElementById('RecuperarDatos');
  // Se conecta con la base de datos de Firebase
  var dataDB = firebase.database().ref('AppDatos').push();
  // Le agregamos un evento click al botón de enviar enviarData.addEventListener('click', enviar);
  // Le agregamos un evento click al botón de enviar 
  enviarData.addEventListener('click', enviar);
  Recuperar.addEventListener('click',RecuperarDatos);
  function enviar () {
    // Se envía los valores de cada input
    dataDB.set({
        DNI: dni.value,
        Nombre: nombre.value,
        APaterno: apaterno.value,
        AMaterno: amaterno.value,
        email: correo.value,
        telefono: telefono.value,
        
      // telefono: telefono.value,
    });
  }


