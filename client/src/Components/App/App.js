import React, { useEffect, useState } from 'react';

// IMPORT SOCKET IO CLIENT
import io from 'socket.io-client';

// IMPORT STYLED COMPONENTS
import {  } from './App.styled';

// IMPORT COMPONENTS

// SOCKETS
let socket;
let chatroom;

const App = () => {
  useEffect(() => {
    socket = io();

    socket.on('connect', () => {
      console.log("User connected to io");
    });
  });
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
