import React from 'react';
import './snow.css'; // Import the custom CSS for snow

function Snow() {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="snow w-full h-full">
                <div className="snowfall" />
            </div>
        </div>
    );
};

export default Snow;