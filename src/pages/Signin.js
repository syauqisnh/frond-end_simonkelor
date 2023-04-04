import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "../component/Login"

function Signin() {
    return (
        <div className="App">
            <div className='login'>
                <Login />
            </div>
        </div>
    );
}

export default Signin;