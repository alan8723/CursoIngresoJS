function mostrar()
{


var contador=0;

    var repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones = parseInt(repeticiones);

for(var i = 1; i <= repeticiones; i++){
    
    if(i % 2 == 0){
        contador++;
        document.write(i + " es par <br/>")
        
    }

    
}
document.write("La cantidad de numeros pares que hay es " + contador)

}//FIN DE LA FUNCIÓN