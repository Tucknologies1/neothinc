// server/index.js
'use strict';

const app = require('./app');
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);

const PORT = process.env.PORT || 9000;

io.on('connection', socket => {
  console.log('New Client connected');
  socket.emit('news', { hello: 'world' });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});