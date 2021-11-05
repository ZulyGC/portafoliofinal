const path = require('path');
//importamos el express
const express = require('express'); //creamos una constante express y requiere importamos libreria conocida tambien como un freimork
const morgan = require('morgan');
const mongoose = require('mongoose');

//const exp = require('constants');
const app = express(); // creamos constante app lo igualamos a las funciones que nos da express
 // conectar base datos
 mongoose.connect('mongodb+srv://user_node_cafe:c2XN06khtMEVco5q@supercafe.vqvmf.mongodb.net/cafeDB')
    .then(db => console.log('Db conectado'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

// configuracion
app.set('port', process.env.PORT || 5500);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);
app.use(express.static(__dirname+'/'));

//rutas

app.get('/vitae', function(req,res){
    res.sendFile(__dirname+'/cv.html'); //dirname es para un directorio relativo
});

app.get('/proyecto', function(req,res){
    res.sendFile(__dirname+'/proyecto.html');
});

app.get('/contacto', function(req,res){
    res.sendFile(__dirname+'/formulario.html');
});
    
//configurar servidor con el puerto 5500
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});

