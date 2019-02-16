function mostrar()
{
    var comida;
    var propina;
    var iva;
    var amigos;
    var total;
    var totalDividido;

    amigos = prompt("¿Cuantos son?");
    comida = prompt("¿Cual es el total de la comida?");
    amigos = parseInt(amigos);
    comida = parseInt(comida);
    propina = comida * 10 / 100;
    iva = comida * 21 / 100;
    total = comida + propina + iva;
    totalDividido = total / amigos;
    alert("con " + propina + " de propina mas el iva de " + iva + ", cada uno debe pagar " + totalDividido);

}
