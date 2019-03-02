function mostrar()
{
    var respuesta=true;
    var paises;
    var superficie;
    var primerPais100;
    var inpar=0;
    var paisesMayorA100=0;
    var superficie100=0;
    var contador=0;
    var promedio=0;
    var pMasChico=0;
    var nombrePMasChico;

    while(respuesta){
        contador++;
        paises = prompt("Ingrese un país")
        superficie = prompt("Ingrese la superficie del país")
        superficie = parseInt(superficie)

        while(superficie < 0 || isNaN(superficie) ){
            superficie = prompt("Errora al ingresar superficie, vuelva a intentarlo")
            superficie = parseInt(superficie)
        }
        
        if(superficie % 2 == 1){
            inpar++;
        }
        else if(superficie > 100){
            paisesMayorA100++;
            if(paisesMayorA100==1){
            primerPais100 = paises;
            }
        }      
        else if (superficie == 100){
            superficie100++;
        }

        if(contador == 1){
            pMasChico = superficie;
            nombrePMasChico = pais;
        }
        if(superficie < pMasChico){
            nombrePMasChico = pais;
        }

         promedio += superficie;
         respuesta=confirm("Quiere ingresar otro país");
    }

    promedio /= contador;
    document.write("-La cantidad de paises con superficie inpar es de <strong>" + inpar + "</strong> <br />");
    document.write("-La cantidad de paises con superficie mayor a 100 es de <strong>" + paisesMayorA100 + "</strong> <br /> " );
    document.write("-La cantidad de paises con la superficie igual a 100 es de <strong>" + superficie100 + "</strong> <br /> ");
    document.write("-El primer pais con una superficie superior a 100 es <strong>" + primerPais100 + "</strong><br /> ");
    document.write("-El promedio de km ingresados es de <strong>" + promedio +"</strong><br /> ");
    documen.write("-el pais que tiene menos superficie es <strong>" + nombrePMasChico + "</strong>");
}
