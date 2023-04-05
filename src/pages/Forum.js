import React from 'react';
import Comments from "../components/Comments"
import Sidebar from '../components/Sidebar';

function Forum() {
    return (
        <div className="App">
            <Sidebar/>
            <Comments />
        </div>
    );
}

export default Forum;