import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import {GoArrowRight} from "react-icons/go";
import React from "react";

const CareerSingle = () => {
    return (
        <section>
            <SubHeader title="Career Details" content="Join Our Team and Make an Impact in Disability Care"/>

            <div className={'container mx-auto flex flex-col gap-6 mt-5 p-2 md:p-0'}>
                <h1 className={'text-primary font-san text-4xl'}>NDIS Mental Health Recovery Coach - (Full-Time)</h1>
                <ul className={'flex flex-col gap-2'}>
                    <li>
                        <div><span className={'font-semibold'}>Department:</span> Product Designer</div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>No. of Openings:</span> 3</div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Job Type:</span> Full-Time</div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Location:</span> Warsaw, Poland</div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Salary range:</span> $80k to $100k (Based on your
                            experience)
                        </div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Working days:</span> Weekly 05 days. Sunday to Thursday.
                            09 AM to 06 PM. (Lunch Break 01 Hour)
                        </div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Application Deadline:</span> November 10, 2023</div>
                    </li>
                    <li>
                        <div><span className={'font-semibold'}>Experience Required:</span> 5+ Years</div>
                    </li>
                </ul>
                <div>
                    <p>We’re looking for an eager and knowledgeable Product Designer to join our technical team in
                        Warsaw, Poland. You’ll be expected to utilize bleeding-edge technology and robust techniques.
                        You should be an excellent communicator and comfortable managing multiple tasks. you also need
                        to be a team player and have a problem-solving aptitude.

                        Working quickly and creatively should come naturally to you, as well as being an innovative
                        problem-solver who takes pride in producing logical, simple, and effective solutions to what are
                        often very new and complex issues.</p>

                    <p>We’re looking for an eager and knowledgeable Product Designer to join our technical team in
                        Warsaw, Poland. You’ll be expected to utilize bleeding-edge technology and robust techniques.
                        You should be an excellent communicator and comfortable managing multiple tasks. you also need
                        to be a team player and have a problem-solving aptitude.

                        Working quickly and creatively should come naturally to you, as well as being an innovative
                        problem-solver who takes pride in producing logical, simple, and effective solutions to what are
                        often very new and complex issues.</p>

                    <p>We’re looking for an eager and knowledgeable Product Designer to join our technical team in
                        Warsaw, Poland. You’ll be expected to utilize bleeding-edge technology and robust techniques.
                        You should be an excellent communicator and comfortable managing multiple tasks. you also need
                        to be a team player and have a problem-solving aptitude.

                        Working quickly and creatively should come naturally to you, as well as being an innovative
                        problem-solver who takes pride in producing logical, simple, and effective solutions to what are
                        often very new and complex issues.</p>
                </div>

                <div className={'flex flex-col py-9 gap-4 bg-white rounded-xl p-6 md:p-9'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'text-3xl text-primary font-san font-bold'}>Apply for This Job</h1>
                        <p>Please make sure your below information is correctly written.</p>
                    </div>

                    <div className={'md:flex md:space-x-6'}>
                        <div className={'flex flex-col space-y-2 py-2 w-full'}>
                            <label className={'font-san font-bold'} htmlFor="name">Full Name</label>
                            <input placeholder={'Enter Name'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                                   type="text"/>
                        </div>

                        <div className={'flex flex-col space-y-2 py-2 w-full'}>
                            <label className={'font-san font-bold'} htmlFor="name">Your Email</label>
                            <input placeholder={'Enter Email'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                                   type="text"/>
                        </div>
                    </div>

                    <div className={'md:flex md:space-x-6'}>
                        <div className={'flex flex-col space-y-2 py-2 w-full'}>
                            <label className={'font-san font-bold'} htmlFor="name">Phone Number</label>
                            <input placeholder={'Enter Phone Number'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                                   type="text"/>
                        </div>

                        <div className={'flex flex-col space-y-2 py-2 w-full'}>
                            <label className={'font-san font-bold'} htmlFor="name">Address</label>
                            <input placeholder={'Enter Full Address'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                                   type="text"/>
                        </div>
                    </div>

                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                        <label className={'font-san font-bold'} htmlFor="name">What is your expected salary?*</label>
                        <input placeholder={'Enter Expected Salary'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                               type="text"/>
                    </div>

                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                        <label className={'font-san font-bold'} htmlFor="name">Cover Letter <small>(Optional)</small></label>
                        <textarea placeholder={'Write about your work experience'}
                                  className={'px-4 bg-gray-100 rounded-lg py-4 resize-none'}/>
                    </div>

                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                        <label className={'font-san font-bold'} htmlFor="name">Resume</label>
                        <input type="file"/>
                    </div>

                    <p>Accepted file types: pdf, doc, jpg, Max. file size: 15 MB.</p>

                    <div className={'flex pt-3 md:pt-0'}>
                        <button
                            className={'btn bg-primary-secondary hover:bg-primary text-xl px-5 md:px-8 py-4 text-white'}>
                            <span>Submit Application</span>
                            <GoArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSingle;