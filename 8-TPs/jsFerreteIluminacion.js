/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var lamparasPrecio;
     var descuento;
     var marca;
     var precioFinal;
     var inpuesto

     marca = document.getElementById("Marca").value;
     cantidad = document.getElementById("Cantidad").value;
     lamparasPrecio = cantidad * 35;
     
 //A)
 switch(cantidad){
     case 5:
     if(marca== "ArgentinaLuz"){
         resultado = lamparasPrecio * 0.5;
     }
              else{

         }
     break;
 }
     if(cantidad < 3 ){
        precioFinal = document.getElementById("precioDescuento").value = lamparasPrecio;
     }
     if (cantidad >= 6){
         descuento = lamparasPrecio * 50 / 100;
         resultado = lamparasPrecio - descuento;
         precioFinal = document.getElementById("precioDescuento").value = resultado;
         //E)
if(resultado > 120){
    inpuesto = resultado * 10 / 100;
    precioFinal = resultado + inpuesto;
    alert("IIBB usted pago " + precioFinal + ", siendo " + inpuesto + " el inpuesto que se pago");
}
     }
 //B)
     if (cantidad == 5 && marca == "ArgentinaLuz"){
         descuento = lamparasPrecio * 40 / 100;
         resultado = lamparasPrecio - descuento;
         precioFinal = document.getElementById("precioDescuento").value = resultado
     }
     else if (cantidad == 5 && marca != "ArgentinaLuz"){
         descuento = lamparasPrecio * 30 / 100;
         resultado = lamparasPrecio - descuento;
         precioFinal = document.getElementById("precioDescuento").value = resultado
     }
//C)
if (cantidad == 4 && marca == "ArgentinaLuz" || cantidad == 4 && marca == "FelipeLamparas"){
    descuento = lamparasPrecio * 25 / 100;
    resultado = lamparasPrecio - descuento;
    precioFinal = document.getElementById("precioDescuento").value = resultado
 }
 else if (cantidad == 4 && marca != "ArgentinaLuz" || cantidad == 4 && marca != "FelipeLamparas"){
    descuento = lamparasPrecio * 20 / 100;
    resultado = lamparasPrecio - descuento;
    precioFinal = document.getElementById("precioDescuento").value = resultado
 }
//D)
  if(cantidad == 3 ){
     if(marca == "ArgentinaLuz"){
        descuento = lamparasPrecio * 15 / 100;
        resultado = lamparasPrecio - descuento;
        precioFinal = document.getElementById("precioDescuento").value = resultado
     }
    else if(marca == "FelipeLamparas"){
        descuento = lamparasPrecio * 10 / 100;
    resultado = lamparasPrecio - descuento;
    precioFinal = document.getElementById("precioDescuento").value = resultado
     }
     else if (marca != "FelipeLamparas","ArgentinaLuz"){
        escuento = lamparasPrecio * 5 / 100;
        resultado = lamparasPrecio - descuento;
        precioFinal = document.getElementById("precioDescuento").value = resultado
     }
     
   }
}
