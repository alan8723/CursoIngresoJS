function mostrar()
{
    var velocidad;
    var combustible;
    var contador=0;
    var promedio=0;
    var velocidadMinima;
    var velocidadMaxima;
    var combustibleMinimo;
    var bandera=true;
    var lMayor100=0;

    while(contador < 5){
        contador++;
        velocidad = prompt("Indique numero de velocidad en km del " + contador + "° vehículo de prueba")
        velocidad = parseInt(velocidad);

        while(velocidad < 0 || velocidad >250 || isNaN(velocidad)){
          velocidad = prompt("Error en el numero de velocidad, vuelva a intentarlo")
          velocidad = parseInt(velocidad)
        }

        combustible = prompt("Indique combustible solido (s) ó liquido (l) del ")

        while(combustible != "s" && combustible != "l"){
          combustible = prompt("Error al indicar combustible, vuelva a intentarlo")

        }
        if(bandera){
            bandera = false;
            velocidadMinima = velocidad;
            combustibleMinimo = combustible;
            velocidadMaxima = velocidad;
        }

        if( velocidad < velocidadMinima){
            combustibleMinimo = combustible;
            velocidadMinima = velocidad        
        }
        else if(velocidad > 100 && combustible == "l"){
            lMayor100++;
        }
        else if(combustible = "s" && velocidad > velocidadMaxima){
            velocidadMaxima = velocidad
        }

        promedio += velocidad;

    }

    promedio /= contador
    alert("El promedio de velocidad es de " + promedio + "Km. La velocidad mas baja es de " + velocidadMinima + "Km y el combustible usado es " + combustibleMinimo + ". La cantidad de combustibre liquido que superó los 100km es de " + lMayor100 + ". La velocidad maxima del combustible liquido alcanza " + velocidadMaxima + "Km")

}
