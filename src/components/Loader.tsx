import React from 'react';

const Loader = () => {
    return (
        <div className="flex gap-2 items-center justify-center min-h-[70vh]">
            <h3>Please Wait</h3>
            <div className="loading"></div>
        </div>
    );
};

export default Loader;
