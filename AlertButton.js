import React from 'react';

const AlertButton = ({ message, children}) => {
    
    const handleClick = () => {
        alert(message)
    };

    return (
        <div>
            <button onClick={handleClick}>
                { children }
            </button>
        </div>
    )
};

export default AlertButton;