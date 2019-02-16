
function mostrar()
{
    var mascotaUno;
    var mascotaDos;
    var pesoMascota_1;
    var pesoMascota_2;
    var pesoFinal;

    mascotaUno = prompt("¿Como se llama tu primera mascota?");
    mascotaDos = prompt("¿Como se llama tu segunta mascota?");
    pesoMascota_1 = prompt("¿cuanto pesa tu primera mascota?");
    pesoMascota_1 = parseInt(pesoMascota_1)
    pesoMascota_2 = prompt("¿Cuanto pesa tu segunda mascota?");
    pesoMascota_2 = parseInt(pesoMascota_2);
    pesoFinal = pesoMascota_1 + pesoMascota_2;
    
    alert("tenes dos cascotas " + mascotaUno + " y " + mascotaDos + ", que pesan " + pesoMascota_1 + " y " + pesoMascota_2 + ", la suma de los kilos es " + pesoFinal);
}
