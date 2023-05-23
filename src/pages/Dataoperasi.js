import React from 'react';
import { CRow, CCol } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import C_DATAOPERASI from '../components/C_DataOperasi';

function Dataoperasi() {
    return (
    <>
    <div className='homes'>
      <div className="wrapper d-flex flex-column">
        <div className="body flex-grow-1 px-3">
            <CRow>
                <CCol xs={12}>
                    <div className='header'>
                        <p> 
                        Data Operasi 
                        </p>
                    </div>
                </CCol>
             </CRow>
            <C_DATAOPERASI/>
        </div>
      </div>
    </div>
    </>
    );
}

export default Dataoperasi;   