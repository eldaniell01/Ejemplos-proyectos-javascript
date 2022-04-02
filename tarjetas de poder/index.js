var img = [];
img["cerdo"] = "cerdo.png";
img["vaca"] = "vaca.png";
img["pollo"] = "pollo.png";

var colection = []

colection.push(new tarjeta("cerdo", 100, 10));
colection.push(new tarjeta("vaca", 100, 15));
colection.push(new tarjeta("pollo", 100, 10));

for(p of colection){
    p.mostrarTarjetas();
}

for(i in colection){
    console.table(i)
}