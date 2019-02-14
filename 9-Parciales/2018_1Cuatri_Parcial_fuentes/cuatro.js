function mostrar()
{
    var numero_1;
    var numero_2;
    var resultado;

    numero_1 = prompt ("dime el primer numero");
    numero_2 = prompt ("dime el segundo numero");

    if(numero_1 == numero_2)
    {
        alert(numero_1 + numero_2);
    }
    else if (numero_1 > numero_2)
    {
        numero_1 = parseInt(numero_1);
        numero_2 = parseInt(numero_2);
        resultado = numero_1 - numero_2;
        alert(resultado);
    }
    else if (numero_1 < numero_2)
    {
        numero_1 = parseInt(numero_1);
        numero_2 = parseInt(numero_2);
        resultado = numero_1 + numero_2;
        alert(resultado);
        if(resultado > 10)
        {
            alert("la suma es " + resultado + " y supero el 10");
        }
    }
    else if(numero_1 < numero_2)
    {
        numero_1 = parseInt(numero_1);
        numero_2 = parseInt(numero_2);
        resultado = numero_1 + numero_2;
    }

}
