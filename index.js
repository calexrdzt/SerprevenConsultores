// importar el módulo express
var express = require('express');

var fs = require('fs');

// crear la variable app usando express
var app = express();

// configurar la carpeta public como "pública"
app.use(express.static('public'));


// configurar la ruta inicial
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/Main.html');
  
    console.log('PAgina Principal');
});

// configurar la ruta contacto
/*
app.get('/contacto', function(request, response){
    response.send('página contacto');
    contador.contacto++;

    let contenido = 'home: ' + contador.home + '\ncontacto: '+contador.contacto;
    fs.writeFile('contador.txt', contenido, 'utf8', function(){
        console.log('archivo escrito');
    });
});

// configurar la ruta sobre-mi
app.get('/sobre-mi', function(request, response){
    response.send('página sobre mi');
});*/   

// iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Escuchando el puerto 3000!');
});