/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var usuario;
var intentos;
var ganador;

intentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.random() * 100;
	numeroSecreto = Math.ceil(numeroSecreto);
	console.log(numeroSecreto);
}

function verificar()
{
	usuario = document.getElementById("numero").value;
	usuario = parseInt(usuario);
	intentos ++ ;
	numIntentos = document.getElementById("intentos").value = intentos;
	if(usuario == numeroSecreto){
		ganador = numeroSecreto == usuario;
	}

	if (usuario < numeroSecreto){
		alert("falta...")
	  }
		else if (usuario > numeroSecreto){
		alert("te pasaste")
	  }
	  if( ganador == true && intentos == 1){
		  alert("usted es psiquico")
	  }
	    else if( ganador == true && intentos == 2){
		  alert("exelente percepción")
	  }
	  else if( ganador == true && intentos == 3){
		  alert("esto es suerte")
	  }
	  else if( ganador == true && intentos == 4){
		  alert("exelente tecnica")
	  }
	  else if( ganador == true && intentos == 5){
		  alert("usted esta en la media")
	  }
	  else if( ganador == true && 6 <= intentos && intentos <= 10){
		  alert("Falta tecnica")
	  }
	  else if( ganador == true && intentos > 10){
		  alert("Afortunado en el amor!!")
	  }

}
     