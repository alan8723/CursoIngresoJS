function mostrar()
{
    var libros;
    var precioLibros;
    var librosPrecio;
    var oferta;
    var descuento;
    var total;
    var recargo;
    var pago;
    
    pago = prompt("¿tarjeta o efectivo? 1 para tarjeta 2 para efectivo");
    pago = parseInt(pago)
    libros = prompt("¿cuantos libros compraste?");
    libros = parseInt(libros);
    precioLibros = prompt("¿Cual es el total de tu compra?");
    precioLibros = parseInt(precioLibros);
     
    if(libros > 2 && precioLibros < 2000 &&pago == 2){
        oferta = precioLibros * 10 / 100;
        total = precioLibros - oferta;
        alert("con la oferta comprando dos libros tenes un descuento adicional de " + oferta + " el total de tu compra es de " + total);
    }
    else if (libros > 2 && precioLibros > 2000 && pago == 2){
        oferta = precioLibros * 10 / 100;
        descuento = precioLibros * 15 / 100;
        total = precioLibros - oferta - descuento;
        alert("con la oferta de comprar mas de 2 libros se descuentan " + oferta + " ademas como tu compra supero los $2000 y tenes un descuento adicional de " + descuento + " el total de su compra es de " + total);
    }
    else if(libros > 2 && precioLibros < 2000 &&pago == 1){
        oferta = precioLibros * 10 / 100;
        recargo = precioLibros * 10 / 100;
        total = precioLibros - oferta + recargo;
        alert("con la oferta comprando dos libros tenes un descuento de " + oferta + ", pagando con tarjeta tenes un recargo adicional de " + recargo + " el total de tu compra es de " + total);
    }
    else if (libros > 2 && precioLibros > 2000 && pago == 1){
        oferta = precioLibros * 10 / 100;
        descuento = precioLibros * 15 / 100;
        recargo = precioLibros * 10 / 100;
        total = precioLibros - oferta - descuento + recargo;
        alert("con la oferta de comprar mas de 2 libros se descuentan " + oferta + " ademas como tu compra supero los $2000 y tenes un descuento adicional de " + descuento + ", pagando con tarjeta tenes un recargo adicional de " + recargo + " el total de su compra es de " + total);
    }
}
