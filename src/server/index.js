// server/index.js
'use strict';

const app = require('./app');
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);

const PORT = process.env.PORT || 9000;

io.on('connection', socket => {
  var address = socket.conn.remoteAddress;
  console.log('New Client connected' + address);

  socket.on('messageSent', (data) => {
    console.log(data);
    console.log("Store this data on database");
  })
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});