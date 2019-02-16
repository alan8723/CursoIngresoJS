function mostrar()
{
    var compra;
    var descuento;
    var iva;
    var resultado;
    var compraFinal;

    compra = prompt("¿de cuanto es tu compra?");
    compra = parseInt(compra);
    descuento = compra * 10 / 100;
    resultado = compra - descuento;
    iva = resultado * 25 / 100;
    compraFinal = resultado + iva;
    alert("tu compra es de " + compra + " tienes un descuento del 10% queda en " + resultado + ", mas el iva es " + compraFinal)
}
