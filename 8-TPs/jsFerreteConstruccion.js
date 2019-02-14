/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var alambre;
var cal;
var cemento;
var areaTerreno;
var perimetro;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho= parseInt(ancho);
    alambre = ancho * 2 + largo * 2;
    if(ancho == largo)
    {
        alert("eso es un cuadrado :v");
    }
    alert("se necesitan 3 hilos de alambre de " + alambre); 
}

function Circulo () 
{
    radio = document.getElementById("Radio").value;
    perimetro = 2 * Math.PI
    alambre = perimetro * radio;
    alert("se necesita 3 hilos de alambre de " + alambre);
}
function Materiales () 
{
	largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    areaTerreno = ancho * largo; 
    cal = areaTerreno * 3;
    cemento = areaTerreno * 2;
    alert("se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}