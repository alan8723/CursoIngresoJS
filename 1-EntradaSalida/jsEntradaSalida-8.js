/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var dividendo;
  var divisor;
  var numDividendo;
  var numDivisor;
  var resultado;

  dividendo = document.getElementById("numeroDividendo").value;
  divisor = document.getElementById("numeroDivisor").value;
  numDividendo = parseInt(dividendo);
  numDivisor = parseInt(divisor);
  resultado = numDividendo % numDivisor;
  alert("el resto es " + resultado);
}
