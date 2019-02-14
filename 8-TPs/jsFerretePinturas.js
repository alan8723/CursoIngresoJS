/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var fahrenheit;
var celsius;
var temperatura;
var formula;

function FahrenheitCentigrados () 
{
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    fahrenheit = temperatura - 32
    formula = 5 / 9;
    celsius = fahrenheit * formula;
    alert (temperatura + " grados Fahrenheit, es " + celsius + " grados Celsius"); 
}

function CentigradosFahrenheit () 
{
	temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    formula = 9 / 5;
    celsius = temperatura * formula;
    fahrenheit = celsius + 32;
    alert (temperatura + " grados Celsius es " + fahrenheit + " grados Fahrenheit")
}
