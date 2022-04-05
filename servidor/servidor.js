var express = require("express");

var app = express();

app.get('/', home);
app.get('/otherpag', otherpag);
function home(peticion, resultado){
    resultado.send("este es el home")
}

function otherpag(peticion, resultado){
    resultado.send("esto es otra pagina")
}

app.listen(3023);