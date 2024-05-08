import React from 'react'

interface LoaderProps {
    progress: number;
}

const Loader = ({ progress }: LoaderProps) => {
    return (
        <div className="loader-container w-full h-10 bg-gray-300">
            <div className="loader-bar h-full bg-blue-500 text-center text-white transition-width duration-500" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};

export default Loader