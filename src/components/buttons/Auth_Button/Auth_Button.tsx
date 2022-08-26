import React from 'react';
import { Button } from 'antd';
import '../../../styles/components/buttons/Auth_Button.scss';

interface buttonProp {
  title: string;
  myaction: () => void;
}

function Auth_Button(props: buttonProp) {
  return (
    <Button className="auth-button" id="loginButton" onClick={props.myaction}>
      {props.title}
    </Button>
  );
}

export default Auth_Button;
