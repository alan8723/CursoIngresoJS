function mostrar()
{
	var contador=0;
	var maximo;
	var minimo;
	// declarar variables
	var usuario;
	var bandera = true
	var respuesta=confirm("¿Ingresar numero?");

  while(respuesta){
	  
  do {
	  usuario = prompt("di un numero");
			usuario = parseInt(usuario);
}
  while(isNaN(usuario)){
    usuario = prompt("dije un numero >:V");
    usuario = parseInt(usuario);
   }
   if(bandera){
	   bandera = false;
	   maximo = usuario;
	   minimo = usuario;
   }
	 if(usuario > maximo){
		 maximo = usuario;
	 }
	 else if(usuario < minimo){
		 minimo = usuario;
	 }

	 document.getElementById("minimo").value = minimo;
	 document.getElementById("maximo").value = maximo;

   respuesta=confirm("¿Ingresar otro numero?");
 }
}//FIN DE LA FUNCIÓN