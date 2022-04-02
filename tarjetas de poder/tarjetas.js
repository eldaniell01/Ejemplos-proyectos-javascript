class tarjeta{
    constructor(name, health, power){
       this.name = name;
       this.healt = health;
       this.power = power;
       this.imagen = new Image();
       this.imagen.src = img[this.name];
    }
    talk(){
        alert("hola");
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