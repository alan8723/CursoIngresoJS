/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var cobro;
    var resultado;
    
    sueldo = document.getElementById("sueldo").value;
    cobro = parseInt(sueldo);
    resultado = cobro * 10 / 100 + cobro;
    aumento = document.getElementById("resultado").value = resultado;
}
