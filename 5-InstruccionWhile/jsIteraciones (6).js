function mostrar()
{

	var contador=0;
  var acumulador=0;
  var usuario;

while(contador <=4){
  contador ++;
  usuario = prompt("di un numero")
  usuario = parseInt(usuario);

  while(isNaN(usuario)){
    usuario = prompt("dije un numero >:V")
  }
  usuario = parseInt(usuario);
  acumulador += usuario;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
