const express = require('express');
const os = require("os");
const moment = require('moment-timezone');

const app = express();
const port = 8080;

const author = "Grzegorz Rogowski";
const date = new Date().toDateString(); 

app.get('/', (req, res) => {
  const ip = req.socket.remoteAddress;
  const hostname = os.hostname();
  const timestamp = moment().tz('Europe/Warsaw').format('YYYY-MM-DD HH:mm:ss');

  res.send(`IP klienta: ${ip}<br>Hostname serwera: ${hostname}<br>Data i czas w strefie czasowej klienta: ${timestamp}<br>Autor serwera: ${author}<br>Port serwera: ${port}`);
});

app.listen(port, () => {
  console.log(`Serwer uruchomiony. Autor: ${author}. Nasłuchiwanie na porcie ${port}. Data: ${date}`);
});
