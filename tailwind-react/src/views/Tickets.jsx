import React from 'react';

const Tickets = () => {
    return (
        <div className='bg-alepurple container mx-auto p-10 m-4' >
            <h1 className="text-4xl font-bold mybasetext">Get Your Kirkenes Film Festival Tickets</h1>
            <p className="text-lg mybasetext mt-4">
                Welcome to the Kirkenes Film Festival Ticket Sales page! We're excited to offer you a variety of ticket options to
                make your festival experience unforgettable.
            </p>
            <p className="text-lg mybasetext mt-4">
                Choose from the following ticket categories:
            </p>
            <ul className="list-disc list-inside text-lg mybasetext mt-2">
                <li>Single-Day Pass - Access to films on a specific day of your choice.</li>
                <li>Full Festival Pass - Enjoy all the films and events throughout the entire festival.</li>
                <li>VIP Pass - Get exclusive access, reserved seating, and special perks.</li>
            </ul>
            <p className="text-lg mybasetext mt-4">
                Don't miss out on this fantastic opportunity to immerse yourself in the world of cinema at the Kirkenes Film Festival.
            </p>
            <button className="bg-alepurple hover:bg-alecharcoal mybasetext font-bold py-2 px-4 rounded-full mt-4">
                Buy Tickets
            </button>
        </div>
    );
};

export default Tickets;
