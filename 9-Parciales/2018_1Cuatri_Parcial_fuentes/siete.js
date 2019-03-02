function mostrar()
{
    var notas;
    var sexo;
    var notaMinimo;
    var sexoMinimo;
    var bandera=true; 
    var contador=0;
    var varones6=0;
    var promedioTotal=0;

    while(contador < 5){
        contador++;
        notas = prompt("ingrese nota del " + contador + "° alumno");
        notas = parseInt(notas);

        while(notas > 10 || notas < 0 || isNaN(notas)){
            notas = prompt("nota invalida vuelva a intentarlo");
            notas = parseInt(notas);        
        }

        sexo = prompt("indique el sexo del " + contador + "° alumno");
        
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("sexo invalido vuelva a intentarlo")
        }

        if(bandera){
            bandera = false;
            notaMinimo = notas;
            sexoMinimo = sexo;
        }
        if(notas < notaMinimo){
            notaMinimo = notas;
        sexoMinimo = sexo;
        }
        else if(notas >= 6 && sexo == "m"){
            varones6++;
        }

        promedioTotal += notas;
    }
    promedioTotal /= contador 
    alert("el promedio total es de " + promedioTotal + ", la nota más baja es " + notaMinimo + " y su sexo es " + sexoMinimo + ", la cantidad de varones que sacaron 6 o mas es " + varones6);
}
