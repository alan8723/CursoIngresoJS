/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var pago;
    var descuento;
    var resultado;
    
    importe = document.getElementById("importe").value;
    pago = parseInt(importe);
    descuento = pago * 25 / 100;
    resultado = pago - descuento;

    aumento = document.getElementById("resultado").value = resultado;
}
