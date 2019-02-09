/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var primerNum;
var segundoNum;
var resultado;
var numero_1;
var numero_2;

function sumar()
{	
	primerNum = document.getElementById("numeroUno").value;
    segundoNum = document.getElementById("numeroDos").value;
    numero_1 = parseInt(primerNum);
    numero_2 = parseInt(segundoNum);
    resultado = numero_1 + numero_2;
    alert("la suma es " + resultado);
}


function restar()
{
    primerNum = document.getElementById("numeroUno").value;
    segundoNum = document.getElementById("numeroDos").value;
    numero_1 = parseInt(primerNum);
    numero_2 = parseInt(segundoNum);
    resultado = numero_1 - numero_2;
    alert("la resta es " + resultado);
}

function multiplicar()
{ 
    primerNum = document.getElementById("numeroUno").value;
    segundoNum = document.getElementById("numeroDos").value;
    numero_1 = parseInt(primerNum);
    numero_2 = parseInt(segundoNum);
    resultado = numero_1 * numero_2;
    alert("la multiplicacion es " + resultado);	
}

function dividir()
{
    primerNum = document.getElementById("numeroUno").value;
    segundoNum = document.getElementById("numeroDos").value;
    numero_1 = parseInt(primerNum);
    numero_2 = parseInt(segundoNum);
    resultado = numero_1 / numero_2;
    alert("la divicion es " + resultado);	
}

