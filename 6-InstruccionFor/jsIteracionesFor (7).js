function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones = parseInt(repeticiones);


for(var i = 1; i <= repeticiones; i++){
   console.log(i)
    
    if(repeticiones % i == 0 ){
        
        document.write( i + " es divisor <br/>")
        
    }
    
    
}


}//FIN DE LA FUNCIÓN