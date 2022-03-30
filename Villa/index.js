
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var mapa = {
    url:  "tile.png",
    carga: false
}
var vaca={
    url: "vaca.png",
    carga: false
};

cantidad = numAleatorio(5,10);

mapa.imagen = new Image();
mapa.imagen.src=mapa.url;
mapa.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

function cargarFondo(){
    mapa.carga = true; 
    dibujarMap();
}

function cargarVaca(){
    vaca.carga = true; 
    dibujarMap();
}
function dibujarMap(){
    if(mapa.carga){
        papel.drawImage(mapa.imagen, 0, 0);
    }
    if(vaca.carga){
        for(var v=0; v< cantidad; v++){
            var x = numAleatorio(0, 420);
            var y = numAleatorio(0, 420);
            papel.drawImage(vaca.objeto, x, y);
        }
    }


}

function numAleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+1
    return resultado;
}
