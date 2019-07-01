var request = require('requestify');
const express = require("express");
const app = express();

app.get('/', function (req, res) {
  // res.json({message: 'Hola ' + req.query.user + '. Escribí "@tito help" para ver los comandos disponibles.'});
  res.send('Hola')
});

// app.get('/info', function (req, res) {
//   request.get(server_url + 'organization/' + req.query.org + '/' + req.query.channel).then(function (response) {
//     let body = response.getBody();
//     res.json({message: 'Nombre del canal: ' + req.query.channel + '\n' +
//                        'Creador: ' + body.owner + '\n' +
//                        'Descripción: ' + body.description + '\n' +
//                        'Cantidad de mensajes: ' + body.messages + '\n' +
//                        'Cantidad de integrantes: ' + body.members});
//   });
// });

app.use(function(req, res, next) {
  res.status(404).json({message: 'Ciudad no disponible. Escribí @temperatura help para ver las ciudades'});
});

app.listen(process.env.PORT || 3000);
