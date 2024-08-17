import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import {CiCircleCheck} from "react-icons/ci";
import {GoArrowRight} from "react-icons/go";
import {services} from "../../components/frontComponents/ServiceLists.js";

const Service = () => {
    return (
        <section>
            <SubHeader title="Service" content="Below are the services we render here at Home My Choice"/>

            <div className={'flex flex-col gap-2 justify-center items-center py-4 md:py-9 text-center '}>
                <h1 className={'text-4xl md:text-6xl font-san text-primary capitalize'}>our main services</h1>
                <span>Find below lists of the services we offer here at HMC</span>
            </div>

            <div
                className={'container mx-auto md:flex justify-between items-center md:space-x-4 space-y-4 md:space-y-0 p-2'}>
                {services.map((service, index) => (
                    <div key={index} className={'relative flex flex-col gap-4 bg-primary text-white rounded-lg w-full p-8'}>
                        <div className={'absolute bg-white text-primary p-5 font-san font-extrabold text-xl shadow-lg top-0 right-0 rounded-bl-full'}>
                            ${service.price}/hr
                        </div>
                        <h1 className={'font-bold text-2xl'}>{service.title}</h1>
                        <p>{service.brief}</p>
                        <ul className={'flex flex-col gap-4 mt-5'}>
                            {service.list.map((list, index) => (
                                <li key={index}>
                                    <div className={'flex space-x-4 items-center'}>
                                        <CiCircleCheck className={'text-primary-secondary'}/>
                                        <span>{list}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className={'mt-5'}>
                            <button
                                className={'btn bg-primary-secondary hover:bg-white text-lg px-5 md:px-10 py-3 text-gray-800'}>
                                <span>Get Started</span>
                                <GoArrowRight/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;