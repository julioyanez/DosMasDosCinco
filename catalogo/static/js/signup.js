function validarFormulario(){

  var txtNombre = document.getElementById('fname').value;
  var txtNick = document.getElementById('nick').value;
  var txtCorreo = document.getElementById('mail').value;
  var txtPass = document.getElementById('pass1').value;
  var txtPass2 = document.getElementById('pass2').value;


  //Test de Nick
  if(txtNick == null || txtNick.length == 0 || /^\s+$/.test(txtNick)){
    alert('No deje el campo de nickname en blanco!');
    document.datos.nick.focus();
    return false;
  }

  //Test campo obligatorio
  if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
    alert('No deje el campo de nombre en blanco!');
    document.datos.fname.focus();
    return false;
  }

  //Test funcion validarCorreo
  if(validarCorreo()==false){
    return false;
  }

  //Test pass vacia
  if(txtPass == null || txtPass.length == 0 || /^\s+$/.test(txtPass)){
    alert('No deje el campo de contraseña en blanco!');
    document.datos.pass1.focus();
    return false;
  }

  //Test pass2 vacia
  if(txtPass2 == null || txtPass2.length == 0 || /^\s+$/.test(txtPass2)){
    alert('No deje el campo de contraseña en blanco!');
    document.datos.pass2.focus();
    return false;
  }

  //Test la contraseña debe tener mas de 8 caracteres
  if(txtPass.length <8){
    alert('La contraseña debe tener más de 8 caracteres');
    document.datos.pass1.value="";
    document.datos.pass1.focus();
    return false;
  }

  //Test funcion validarContraseñas
  if(validarContrasenas()==false){
    return false;
  }

  return true;
}




//funcion validar contraseñas
function validarContrasenas(){

  var txtPass = document.getElementById('pass1').value;
  var txtPass2 = document.getElementById('pass2').value;

  if(txtPass != txtPass2){
    alert('Las contraseñas no coinciden');
    document.datos.pass1.value="";
    document.datos.pass2.value="";
    document.datos.pass1.focus();
    return false;
  }

  return true;
}



//funcion validar correo
function validarCorreo(){

  var txtCorreo = document.getElementById('mail').value;

  if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
    alert('Debe escribir un email válido!');
    document.datos.mail.value="";
    document.datos.mail.focus();
    return false;
  }

  return true;
}


//funcion validar login
function validarLogin(){

   var txtNick = document.getElementById('nick').value;
   var txtPass = document.getElementById('pass1').value;

  if(txtNick == null || txtNick.length == 0 || /^\s+$/.test(txtNick)){
    alert('No deje el campo de nickname en blanco!');
    document.datos.nick.focus();
    return false;
  }

  if(txtPass == null || txtPass.length == 0 || /^\s+$/.test(txtPass)){
    alert('No deje el campo de contraseña en blanco!');
    document.datos.pass1.focus();
    return false;
  }

  return true;
}