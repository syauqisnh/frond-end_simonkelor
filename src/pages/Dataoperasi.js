import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import C_DataOperasi from "../components/C_DataOperasi"
import Sidebar from "../components/Sidebar";

function Dataoperasi() {
    return (
    <>
    <div className="App">
        <div className='C_DataOperasi'>
            <Sidebar />
            <C_DataOperasi/>
        </div>
    </div>
    </>
    );
}

export default Dataoperasi;