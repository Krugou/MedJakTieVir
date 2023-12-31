import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-alepurple container mx-auto p-4 md:p-10 m-4'>
            <h1 className="text-2xl md:text-4xl font-bold mybasetext">404 - Page Not Found</h1>
            <p className="text-base md:text-lg mybasetext mt-2 md:mt-4">
                Oops! The page you are looking for does not exist.
            </p>
            <p className="text-base md:text-lg mybasetext mt-2 md:mt-4">
                It seems like you've taken a wrong turn. Please check the URL or navigate back to the home page.
            </p>
        </div>
    );
};

export default NotFound;
