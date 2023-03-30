import React from 'react';
import Posting from "../components/Posting"
import Sidebar from '../components/Sidebar';

function Forum() {
    return (
        <div className="App">
            <Sidebar/>
            <Posting />
        </div>
    );
}

export default Forum;