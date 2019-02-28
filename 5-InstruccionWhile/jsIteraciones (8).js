function mostrar()
{

  var contador=0;
  var positivo=0;
  var negativo=1;

  var respuesta=confirm("¿Ingresar numero?");

  while(respuesta){
  usuario = prompt("di un numero");
  usuario = parseInt(usuario);

  while(isNaN(usuario)){
    usuario = prompt("dije un numero >:V");
    usuario = parseInt(usuario);
  }
  if (usuario >= 0){
    positivo += usuario;
  }else{
    negativo *= usuario
  }

  respuesta=confirm("¿Ingresar otro numero?");

  }

  document.getElementById('suma').value=positivo;
  document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
