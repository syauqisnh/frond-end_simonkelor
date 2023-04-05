import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EditProfile from './../components/EditProfile';

function Profile() {
    return (
        <div className="App">
            <div className='EditProfile' >
                <EditProfile />
            </div>
        </div>
    );
}

export default Profile;