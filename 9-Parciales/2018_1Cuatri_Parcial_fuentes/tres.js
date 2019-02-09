function mostrar()
{
    var precio;
    var descuento;
    var ecuacion;
    var resultado;
    var precioFinal;

    precio = prompt("idique el precio");
    descuento = prompt("indiue el descuento");
    precio = parseInt(precio);
    descuento = parseInt(descuento);
    ecuacion = precio * descuento / 100;
    resultado = precio - ecuacion;

    precioFinal = document.getElementById("elPrecioFinal").value = resultado;

}
