function mostrar()
{
    var planeta;
    planeta = prompt("escribe un planeta")
    switch(planeta){
        case "mercurio":
        case "venus":
        alert("acá hace más calor")
        break;

        case "tierra":
        alert("acá vivimos")
        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        alert("acá hace más frio")
        break;

        default:
        alert("planeta invalido")

    }
}
