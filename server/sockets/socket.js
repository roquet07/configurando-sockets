const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
       user:'Administrador',
       message:'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', ()=>{
       console.log('Usuario desconectado');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', ( data, callback) => {

       console.log(data);

       client.broadcast.emit('enviarMensaje', data);




      // if(msj.usuario){
      //     callback({
      //         res:'Todo salio bien'
      //     });
      // }else{
      //   callback({
      //       res:'Todo salio MAL'
      //   });
      // }

    });

});