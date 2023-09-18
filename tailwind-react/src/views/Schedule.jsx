import React from 'react';

const Schedule = () => {
    return (
        <div className='bg-alepurple container mx-auto p-6 md:p-10 m-4'>
            <h1 className="text-2xl md:text-4xl font-bold mybasetext">Festival Schedule</h1>
            <p className="text-base md:text-lg mybasetext mt-4">
                Explore the exciting lineup of films, events, and screenings scheduled for the Kirkenes Film Festival.
                Plan your festival experience and make sure you don't miss out on any of the fantastic films and activities.
            </p>
            <div className="mt-6">
                {/* Day 1 */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold mybasetext">Day 1 - Opening Night</h2>
                    <ul className="list-disc list-inside mybasetext mt-2 md:mt-4">
                        <li className="text-sm md:text-base">5:00 PM - Red Carpet Arrival</li>
                        <li className="text-sm md:text-base">7:00 PM - Opening Film: "The Grand Premiere"</li>
                        <li className="text-sm md:text-base">9:30 PM - Welcome Reception</li>
                    </ul>
                </div>

                {/* Day 2 */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold mybasetext">Day 2 - Spotlight Films</h2>
                    <ul className="list-disc list-inside mybasetext mt-2 md:mt-4">
                        <li className="text-sm md:text-base">10:00 AM - "Cinematic Wonders" Documentary</li>
                        <li className="text-sm md:text-base">1:30 PM - "A Journey Through Time" Panel Discussion</li>
                        <li className="text-sm md:text-base">4:00 PM - "Director's Vision" Q&A Session</li>
                        <li className="text-sm md:text-base">7:30 PM - Spotlight Film: "The Masterpiece"</li>
                    </ul>
                </div>

                {/* Day 3 */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mybasetext">Day 3 - Closing Day</h2>
                    <ul className="list-disc list-inside mybasetext mt-2 md:mt-4">
                        <li className="text-sm md:text-base">11:00 AM - Film Workshop: "Behind the Scenes"</li>
                        <li className="text-sm md:text-base">2:00 PM - Award Ceremony: "Best of the Fest"</li>
                        <li className="text-sm md:text-base">5:30 PM - Closing Film: "The Farewell"</li>
                        <li className="text-sm md:text-base">8:00 PM - Farewell Party</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Schedule;
