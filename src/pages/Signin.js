import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "../components/Login"

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