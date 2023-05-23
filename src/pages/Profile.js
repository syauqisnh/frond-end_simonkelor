import React from 'react';
import { CRow, CCol } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EditProfile from './../components/EditProfile';

function Profile() {
    return (
        <>
    <div className='homes'>
      <div className="wrapper d-flex flex-column">
        <div className="body flex-grow-1 px-3">
            <CRow>
                <CCol xs={12}>
                    <div className='header'>
                        <p> 
                        Edit Profile
                        </p>
                    </div>
                </CCol>
             </CRow>
            <EditProfile/>
        </div>
      </div>
    </div>
    </>
        // <div className="App">
        //     <div className='EditProfile'>
        //         <link href='EditProfile.js'></link>
        //         <EditProfile />
        //     </div>
        // </div>
    );
}

export default Profile;