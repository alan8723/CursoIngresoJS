function mostrar()
{
    var numero;
    var contador=0;

    numero = prompt("di un numero");
    numero = parseInt(numero);

    for(var i = 1; i <= numero; i++){

        if(numero % i == 0){
            contador++;
            console.log(contador)
            if(contador > 2){
                document.write("El numero <strong>No</strong> es primo")
                break;
            
            }
            
        }


    
    }


    

}//FIN DE LA FUNCIÓN