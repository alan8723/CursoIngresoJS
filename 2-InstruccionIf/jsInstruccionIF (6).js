function mostrar()
{
//tomo la edad  
     var edad;
     edad = document.getElementById("edad").value;
     if(edad <= 17 && edad >= 13){
      alert("usted es adolecente");
}
     if(edad < 13){
         alert("usted es un niño");
     }
     if(edad > 17){
         alert("usted es mayor");
     }

}//FIN DE LA FUNCIÓN