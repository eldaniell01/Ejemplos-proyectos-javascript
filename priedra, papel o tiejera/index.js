var cpu = "priedra"

function juego(juego, cpu){
    switch(juego){
        case "priedra":
            juego === cpu ? console.log("empate"): "";
            break;
        case "tijera":
            juego != cpu ? console.log("gana el cpu") : "";
            break; 
        default:
            juego ==="papel" ? console.log("gano el usuario") :"";
            break;
    }
}