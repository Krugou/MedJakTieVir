import React from 'react';

const Mission = () => {
    return (
        <div className='bg-alepurple container mx-auto p-4 md:p-10 m-4'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mybasetext">Our Mission</h1>
            <p className="text-sm md:text-lg lg:text-xl mybasetext mt-4">
                At the Kirkenes Film Festival, our mission is to celebrate the art of cinema and bring people together
                through the magic of storytelling. We are dedicated to showcasing diverse and thought-provoking films
                from around the world, fostering creativity, and nurturing a love for cinema among our audiences.
            </p>
            <div className="mt-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mybasetext">Our Values</h2>
                <ul className="list-disc mt-4 text-sm md:text-base lg:text-lg mybasetext">
                    <li>Passion for Film: We are driven by a deep passion for the art of filmmaking.</li>
                    <li>Inclusivity: We believe in inclusivity and diversity in both films and audiences.</li>
                    <li>Community: We strive to create a sense of community among film enthusiasts.</li>
                    <li>Education: We aim to educate and inspire through the power of storytelling.</li>
                    <li>Entertainment: We provide entertainment that resonates with hearts and minds.</li>
                </ul>
            </div>
        </div>

    );
};

export default Mission;


