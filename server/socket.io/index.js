const socketio = require('socket.io');
const { server } = require('../server');


// IMPORT CONTROLLERS

// IMPORT QUERIES

// ENTRY POINT NAMESPACE
const ios = socketio(server);

// OTHER NAMESPACES
const chatroom = ios.of("/chatroom");

ios.on('connect', (socket) => {
  console.log('Connected to io');

  socket.on('disconnect', () => {
    console.log("Disconnected from io");
  });
});