import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledButton, StyledForm, StyledInput, StyledSignin } from './Signin.styled';

const Signin = ({
  signin,
  setSigninPassword,
  setSigninUsername
}) => {

  return (
    <StyledSignin>
      <StyledForm onSubmit={e => signin(e)}>
        <StyledInput placeholder="Username" type="text" onChange={e => setSigninUsername(e.target.value)} />
        <StyledInput placeholder="Password" type="password" onChange={e => setSigninPassword(e.target.value)} />
        <StyledButton type="submit">ACCESS</StyledButton>
      </StyledForm>
    </StyledSignin>
  );
};

export default Signin;