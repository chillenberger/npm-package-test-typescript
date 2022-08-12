import React from 'react';
import { Button } from 'antd';
import '../styles/components/hello.scss';

interface buttonProp {
    title: string, 
    action: () => void
}

function Auth_Button(props: buttonProp) {
    return (
        <Button
            className="auth-button"
            id="loginButton"
            onClick={props.action}>
            {props.title}
            rev 0.2.20
        </Button>
    )
}

export default Auth_Button ;