function auto (auto, modelo, year){
    this.auto = auto;
    this.modelo = modelo;
    this.year = year;

}

var autos = []

for(var i =0; i<3;i++){
    autos.push(new auto(prompt("auto "), prompt("modelo "), prompt("año ")))
}

for(var i = 0; i<autos.length;i++){
    console.log(autos[i]);
}

