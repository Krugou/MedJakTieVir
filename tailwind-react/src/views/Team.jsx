import React from 'react';

const Team = () => {
    return (
        <div className='bg-alepurple container mx-auto p-4 m-4'>
            <h1 className="text-4xl font-bold mybasetext">Meet the Kirkenes Film Festival Team</h1>
            <p className="text-lg mybasetext mt-4">
                Our festival wouldn't be possible without the dedicated and passionate individuals who make up our team. Get to know
                the people behind the scenes who work tirelessly to bring you an exceptional cinematic experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Team Member 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                        src="/images/team-member1.jpg"
                        alt="Team Member 1"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mybasetext">John Doe</h2>
                    <p className="text-gray-600 mybasetext">Festival Director</p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                        src="/images/team-member2.jpg"
                        alt="Team Member 2"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mybasetext">Jane Smith</h2>
                    <p className="text-gray-600 mybasetext">Program Coordinator</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                        src="/images/team-member3.jpg"
                        alt="Team Member 3"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mybasetext">Michael Johnson</h2>
                    <p className="text-gray-600 mybasetext">Marketing Manager</p>
                </div>
            </div>
        </div>
    );
};

export default Team;


