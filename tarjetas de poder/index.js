var img = [];
img["cerdo"] = "cerdo.png";
img["vaca"] = "vaca.png";
img["pollo"] = "pollo.png";

class tarjeta{
    constructor(name, health, power){
       this.name = name;
       this.healt = health;
       this.power = power;
       this.imagen = new Image();
       this.imagen.src = img[this.name];
    }
    talk(){

    }
    mostrarTarjetas(){
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<h3>"+ this.name +"</h3>");
        document.write("<h3>"+ this.healt +"</h3>");
        document.write("<h3>"+ this.power +"</h3>");
        document.write("</p>")
    }
}

var cerdo = new tarjeta("cerdo", 100, 10);
var vaca = new tarjeta("vaca", 100, 15);
var pollo = new tarjeta("pollo", 100, 10);
