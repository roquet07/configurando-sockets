let socket = io();
//Escuchar
socket.on('connect', function() {
     console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
     console.log('perdimos conexion con el servidor');
});


//Enviar informacion
socket.emit('enviarMensaje', {
    usuario:'Edwin Roquet',
    mensaje:'Hola mundo'
}, function( resp){
    console.log('respuesta server: ', resp);
});

//Escuchar informacio
socket.on('enviarMensaje', function(message){
    console.log('Servidor', message);
});