function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=confirm("¿Ingresar numero?");
  var usuario;

while(respuesta){
  contador ++;
  usuario = prompt("di un numero")
  usuario = parseInt(usuario);

  while(isNaN(usuario)){
    usuario = prompt("dije un numero >:V")
  }

  usuario = parseInt(usuario);
  acumulador += usuario;
  respuesta=confirm("¿Ingresar otro numero?")
  }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
