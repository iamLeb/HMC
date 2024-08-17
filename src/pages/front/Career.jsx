import { IoMdTime } from "react-icons/io";
import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import {GoArrowRight} from "react-icons/go";

const Career = () => {

    const jobs = [
        {
            title: 'Empowerment Support Specialist',
            address: 'Perth, Western Australia, Australia',
            experience: '1-3',
            deadline: 'November 09, 2024',
            availability: 'Full Time'
        }, {
            title: 'Software Engineering',
            address: 'Winnipeg Manitoba, Canada',
            experience: '1-3',
            deadline: 'September 01, 2024',
            availability: 'Part Time'
        },
    ];
    return (
        <section>
            <SubHeader title="Career" content="Join Our Team and Make a Difference in Disability Care" />

            <div className={'flex flex-col gap-6 py-10 md:py-20 p-2'}>
                {jobs.map((job, index) => (
                    <div key={index} className={'container mx-auto md:flex justify-between items-center bg-white p-9 rounded-xl'}>
                        <div className={'flex flex-col gap-6'}>
                            <h1 className={'text-3xl text-primary'}>{job.title}</h1>
                            <p className={'text-gray-500'}>{job.address}</p>
                            <p className={'text-gray-500'}>{job.experience} Years Experience</p>
                            <p className={'text-gray-500 font-medium'}>Deadline : <span className={'font-normal'}>{job.deadline}</span>
                            </p>
                        </div>

                        <div className={'flex flex-col gap-6 md:gap-12'}>
                            <div className={'flex items-center gap-2 text-gray-500'}>
                                <IoMdTime className={'text-2xl'}/>
                                <span>{job.availability}</span>
                            </div>

                            <div className={'flex'}>
                                <button
                                    className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-8 py-4 text-white'}>
                                    <span>View Job</span>
                                    <GoArrowRight/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;