var servidorExpress = require('express');

var app = servidorExpress();

app.get('/', home);

function home(peticion, resultado){
    resultado.send('hola mundo!');
}

app.listen(3023, function(error){
    if(error) return console.log('hubo un error'), process.exit(1);
    console.log('abierto en el puerto 3023');
})