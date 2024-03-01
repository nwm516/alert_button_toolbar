import React from 'react';
import AlertButton from './AlertButton';

const Toolbar = () => {
    return (
        <div>
            {/* Added various break tags for readability and breathing room for the buttons  */}
            <br />
            <AlertButton message="This is not the greatest song in the world, no." children="Tribute" /><br />
            <AlertButton message="!!!" children="???" /><br />
            <AlertButton message="UP - UP - DOWN - DOWN - LEFT - RIGHT - LEFT - RIGHT - B - A - Start" children="K-Code" />
        </div>
    );
};

export default Toolbar;