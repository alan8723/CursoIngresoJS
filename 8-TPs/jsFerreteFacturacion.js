/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio_1;
var precio_2;
var precio_3;
var resultado;
var promedio;
var iva;
var precioFinal;

function Sumar ()
{
    precio_1 = document.getElementById("PrecioUno").value;
    precio_2 = document.getElementById("PrecioDos").value;
    precio_3 = document.getElementById("PrecioTres").value;
    precio_1 = parseInt(precio_1);
    precio_2 = parseInt(precio_2);
    precio_3 = parseInt(precio_3);
    resultado = precio_1 + precio_2 + precio_3;
    alert(resultado);

}
function Promedio () 
{
    precio_1 = document.getElementById("PrecioUno").value;
    precio_2 = document.getElementById("PrecioDos").value;
    precio_3 = document.getElementById("PrecioTres").value;
    precio_1 = parseInt(precio_1);
    precio_2 = parseInt(precio_2);
    precio_3 = parseInt(precio_3);
    resultado = precio_1 + precio_2 + precio_3;
    promedio = resultado / 3;
    alert(promedio);
	
}
function PrecioFinal () 
{
    precio_1 = document.getElementById("PrecioUno").value;
    precio_2 = document.getElementById("PrecioDos").value;
    precio_3 = document.getElementById("PrecioTres").value;
    precio_1 = parseInt(precio_1);
    precio_2 = parseInt(precio_2);
    precio_3 = parseInt(precio_3);
    resultado = precio_1 + precio_2 + precio_3;
    iva = resultado * 25 / 100;
    precioFinal = resultado + iva;
    alert(precioFinal);
}