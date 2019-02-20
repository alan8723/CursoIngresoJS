function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño){
    
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("falta para el invierno")
    break; 
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio")
    break;
    default: 
    alert("ya pasamos el frio")
   
}



}//FIN DE LA FUNCIÓN