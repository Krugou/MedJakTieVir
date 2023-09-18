import React from 'react';

const Contact = () => {
    return (
        <div className='bg-alepurple container mx-auto p-6 md:p-10 m-4'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mybasetext">Contact Us</h1>
            <p className="text-sm md:text-lg lg:text-xl mybasetext mt-4">
                We'd love to hear from you! If you have any questions, feedback, or inquiries about the Kirkenes Film
                Festival, feel free to get in touch with us. Our team is here to assist you.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mybasetext">Contact Information</h2>
                <ul className="list-disc mt-4 text-sm md:text-base lg:text-lg mybasetext">
                    <li>
                        <strong>Email:</strong> contact@kirkenesfilmfestival.com
                    </li>
                    <li>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </li>
                    <li>
                        <strong>Address:</strong> 123 Festival Avenue, Kirkenes, Norway
                    </li>
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mybasetext">Connect with Us</h2>
                <p className="text-sm md:text-base lg:text-lg mybasetext mt-4">
                    Follow us on social media to stay updated on the latest festival news and events. We're active on
                    Facebook, Twitter, and Instagram!
                </p>
                <div className="flex mt-4">
                    <a href="#" className="text-blue-500 hover:underline mr-4">
                        Facebook
                    </a>
                    <a href="#" className="text-blue-500 hover:underline mr-4">
                        Twitter
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                        Instagram
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Contact;
