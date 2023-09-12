import React from 'react';

const Partners = () => {
    return (
        <div className='bg-alepurple container mx-auto p-4 m-4'>
            <h1 className="text-4xl font-bold mybasetext">Our Festival Partners</h1>
            <p className="text-lg mybasetext mt-4">
                We are grateful to our festival partners for their support in making the Kirkenes Film Festival a
                success. Our partners play a crucial role in bringing exceptional cinematic experiences to our
                audience.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mybasetext">Platinum Partners</h2>
                <ul className="list-disc list-inside mybasetext mt-4">
                    <li>FilmMasters International</li>
                    <li>CineWorld Studios</li>
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mybasetext">Gold Partners</h2>
                <ul className="list-disc list-inside mybasetext mt-4">
                    <li>SilverScreen Entertainment</li>
                    <li>MovieMagic Productions</li>
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mybasetext">Media Partners</h2>
                <ul className="list-disc list-inside mybasetext mt-4">
                    <li>Cinephile Magazine</li>
                    <li>FilmFanatics Weekly</li>
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mybasetext">Community Partners</h2>
                <ul className="list-disc list-inside mybasetext mt-4">
                    <li>Kirkenes Arts Council</li>
                    <li>Local Film Enthusiasts Club</li>
                </ul>
            </div>
        </div>
    );
};

export default Partners;
