/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var usuario = prompt("cual es tu nombre?");
	var nombre = document.getElementById("elNombre").value = usuario;

}

