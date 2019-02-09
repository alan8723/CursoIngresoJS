/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNum;
    var segundoNum;
    var resultado;
    var numero_1;
    var numero_2;

    primerNum = document.getElementById("numeroUno").value;
    segundoNum = document.getElementById("numeroDos").value;
    numero_1 = parseInt(primerNum);
    numero_2 = parseInt(segundoNum);
    resultado = numero_1 + numero_2;
    alert("la suma es " + resultado);
}

