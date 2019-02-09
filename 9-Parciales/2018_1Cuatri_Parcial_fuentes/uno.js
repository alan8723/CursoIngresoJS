

function mostrar()
{
    var recL;
    var recA;
    var resultado;
    var largoR;
    var AnchoR;
    var perimetro;

    recL = prompt("elige un numero de largo para el rectangulo");
    recA = prompt("elije un numero de ancho para el rectangulo ");
    largoR = parseInt(recL);
    anchoR = parseInt(recA);

    resultado = largoR + anchoR;
    perimetro = resultado * 2;

  alert("el perimetro de su rectangulo es " + perimetro);
}
