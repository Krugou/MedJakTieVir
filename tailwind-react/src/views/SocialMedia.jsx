import React from 'react';

const SocialMedia = () => {
    return (
        <div className='bg-alepurple container mx-auto p-4 md:p-10 m-4'>
            <h1 className="text-2xl md:text-4xl font-bold mybasetext">Connect with Us on Social Media</h1>
            <p className="text-base md:text-lg mybasetext mt-4">
                Stay updated with the latest festival news, film screenings, and behind-the-scenes insights by following us on social media. Join our online community and be a part of the Kirkenes Film Festival experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Social Media Link 1 */}
                <div className="bg-alegreen rounded-lg shadow-md p-4 md:p-6">
                    <a
                        href="https://www.facebook.com/KirkenesFilmFestival"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl md:text-4xl text-blue-600 hover:text-blue-800"
                    >
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <h2 className="text-lg md:text-xl font-semibold mybasetext">Facebook</h2>
                </div>

                {/* Social Media Link 2 */}
                <div className="bg-alegreen rounded-lg shadow-md p-4 md:p-6">
                    <a
                        href="https://twitter.com/KirkenesFilmFest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl md:text-4xl text-blue-400 hover:text-blue-600"
                    >
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <h2 className="text-lg md:text-xl font-semibold mybasetext">Twitter</h2>
                </div>

                {/* Social Media Link 3 */}
                <div className="bg-alegreen rounded-lg shadow-md p-4 md:p-6">
                    <a
                        href="https://www.instagram.com/kirkenesfilmfest/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl md:text-4xl text-pink-600 hover:text-pink-800"
                    >
                        <i className="fab fa-instagram-square"></i>
                    </a>
                    <h2 className="text-lg md:text-xl font-semibold mybasetext">Instagram</h2>
                </div>
            </div>
        </div>

    );
};

export default SocialMedia;
