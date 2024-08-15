import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import React from "react";
import {GoArrowRight} from "react-icons/go";

const Single = () => {
    return (
        <section>
            <SubHeader title="Home Care Servive" content="Below are the description of what to expect"/>

            <div className="container mx-auto md:flex justify-between items-center space-x-0 md:space-x-6 p-2 md:p-0">
                <div className="hidden md:block overflow-hidden w-full h-[500px] py-5">
                    <img className="object-cover object-center w-full h-full rounded-lg"
                         src="//images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=800"
                         alt="photo"/>
                </div>

                <div className="flex flex-col gap-2 w-full py-5">
                    <h1 className="font-san font-bold text-primary text-3xl md:text-4xl">Empowering Lives, Enhancing
                        Independence</h1>
                    <p>
                        For over 26 years, our organization has been a trusted NDIS disability service provider,
                        dedicated to improving the lives of the elderly, disabled, impaired, and those with diverse
                        health needs. We believe in a world where everyone deserves the opportunity to live
                        independently and with dignity, regardless of their challenges.
                    </p>
                    <p>
                        Our team is comprised of passionate professionals who are committed to delivering personalized,
                        high-quality care that is tailored to the unique needs of each individual we serve. From daily
                        living assistance to specialized health services, we work tirelessly to ensure that our clients
                        receive the support they need to thrive.
                    </p>
                    <p>
                        We understand that navigating the complexities of disability services can be overwhelming.
                        That's why we are here to guide and support our clients every step of the way, providing
                        compassionate care that enhances their quality of life.
                    </p>
                </div>
            </div>


            <div className="container mx-auto md:flex justify-between items-center space-x-0 md:space-x-6 p-2 md:p-0">
                <div className="flex flex-col gap-2 w-full py-5">
                    <h1 className="font-san font-bold text-primary text-center md:text-start text-3xl md:text-4xl">Why our services are better
                        than others?</h1>
                    <div className={'py-5'}>
                        <div className={'grid grid-cols-2 gap-4'}>
                            <div
                                className="bg-white shadow-lg rounded-lg p-3 hover:scale-105 transition-all duration-300">
                                <span className={'text-xl text-primary font-san'}>Light housekeeping & Laundry</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Meal Preparation & Planning</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Companionship</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Light yard work</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Grocery shopping</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Errands</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Pet care</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Incidental Transportation</span>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <span className={'text-xl text-primary font-san'}>Cleaning out cupboards</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block overflow-hidden w-full h-[500px] py-5">
                    <img className="object-cover object-center w-full h-full rounded-lg"
                         src="//images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?auto=compress&cs=tinysrgb&w=800"
                         alt="photo"/>
                </div>
            </div>

            <div className={'container mx-auto flex justify-center md:justify-start gap-2'}>
                <span>Are you Interested?</span>
                <button className={'flex flex-row items-center space-x-2 text-primary'}>
                    <span>Get Started</span>
                    <GoArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Single;