var request = require('requestify');
const express = require("express");
const app = express();

app.use(express.json());

app.post('/', function (req, res) {
  request.request('https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=' + req.body.query, {
    method: 'GET',
    headers: {'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
              'X-RapidAPI-Key': 'a333959003mshc4e954768cc56b9p1a46a9jsn945cfc99b9cc'}
  }).then(function (response) {
    let body = response.getBody();
    res.json({message: 'Ciudad: ' + req.body.query + '\n' +
                       'Temperatura: ' + body.main.temp + '°C\n' +
                       'Presión: ' + body.main.pressure + 'hPa\n' +
                       'Humedad: ' + body.main.humidity + '%'});
  });
});

app.use(function(req, res, next) {
  res.status(404).json({message: 'Ciudad no disponible.'});
});

app.listen(process.env.PORT || 3000);
