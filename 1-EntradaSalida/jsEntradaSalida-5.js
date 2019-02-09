/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
    var usuarioNombre;
    var usuarioEdad;
    
    usuarioNombre = document.getElementById("elNombre").value;
    usuarioEdad = document.getElementById("laEdad").value;
    alert("usted se llama " + usuarioNombre + " y tiene " + usuarioEdad + " años")
}
	


