const socketio = require('socket.io');
const { server } = require('../server');


// IMPORT CONTROLLERS
const { signin } = require('../controllers/auth.controller');

// IMPORT QUERIES

// ENTRY POINT NAMESPACE
const ios = socketio(server);

// OTHER NAMESPACES
const chatroom = ios.of("/chatroom");

ios.on('connect', (socket) => {

  signin(socket);
  socket.on('disconnect', () => {
    
  });
});