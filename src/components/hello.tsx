import React from 'react';
import '../styles/hello.css';

const message: string = 'hello world 3'

function HelloWorld() {
    return (
        <div className='hello_div'>
            <h1>Hello from npm registry!</h1>
        </div>
    );
}

const MyTester: React.FC = (children) => {
    return (
        <div>Hi</div>
    )
}

function Button() {
    return (
        <div style={{'backgroundColor':'green'}} onClick={() => console.log('hit button')}>
            <h1>My Button</h1>
        </div>
    )
}

export {HelloWorld, Button, MyTester};