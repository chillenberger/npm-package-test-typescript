import React from 'react';
import { Button } from 'antd';
import '../styles/components/hello.scss';

function Auth_Button(props) {
    return (
        <Button
            className="auth-button"
            id="loginButton"
            onClick={props.action}>
            {props.title}
        </Button>
    )
}

export default Auth_Button ;