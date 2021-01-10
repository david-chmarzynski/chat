import React, { useEffect, useState } from 'react';

// IMPORT SOCKET IO CLIENT
import io from 'socket.io-client';

// IMPORT STYLED COMPONENTS
import { StyledApp } from './App.styled';

// IMPORT COMPONENTS
import Signin from '../Signin/Signin';
import Alert from '../Alert/Alert';

// SOCKETS
let socket;
let chatroom;

const App = () => {
  // USE STATES
  const [signinUsername, setSigninUsername] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [online, setOnline] = useState(false);

  // USE EFFECT MAIN NAMESPACE
  useEffect(() => {
    socket = io();
  });

  // USE EFFECT CHATROOM NAMESPACE

  const signin = (e) => {
    e.preventDefault();
    const ids = {signinUsername, signinPassword};
    socket.emit('signin', ids, (res) => {
      if(res.status === 200) {
        setOnline(true);
        setAlert(true);
        setAlertMessage(res.message)
      } else {
        setAlert(true);
      }
    });
  };

  return (
    <StyledApp>
      {!online && (
        <Signin
          signin={signin}
          setSigninPassword={setSigninPassword}
          setSigninUsername={setSigninUsername}
        />
      )}
      {alert && (
        <Alert message={alertMessage} setAlert={setAlert}/>
      )}
    </StyledApp>
  );
}

export default App;
