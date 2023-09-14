import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-alepurple container mx-auto p-10 m-4'>
            <h1 className="text-4xl font-bold mybasetext">Subscribe to Our Newsletter</h1>
            <p className="text-lg mybasetext mt-4">
                Stay updated with the latest news, film announcements, and exclusive offers by subscribing to our
                newsletter. Don't miss out on the exciting events and films at the Kirkenes Film Festival.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mybasetext">Subscribe Now</h2>
                <form className="mt-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <input
                            type="email"
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
