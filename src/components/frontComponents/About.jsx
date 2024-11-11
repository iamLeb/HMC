import aboutMap from "../../assets/images/about-map-img.png";
import { GoArrowRight } from "react-icons/go";
import {useNavigate} from "react-router-dom";
import React from "react";

const About = () => {
    const navigate = useNavigate();
    return (
        <section className={'bg-white py-5'}>
            <div className={'container mx-auto'}>
                {/* Section Header */}
                <div className={'flex flex-col gap-4 md:gap-6 justify-center items-center text-center md:text-start py-4'}>
                    <span className="bg-white px-5 rounded-full text-primary uppercase font-semibold text-sm">What we do</span>
                    <h1 className={'text-2xl md:text-6xl font-san text-primary'}>About Us</h1>
                </div>

                {/* Content Section */}
                <div className={'bg-primary text-white rounded-lg p-9 mx-2'}>
                    <div className={'md:flex space-y-6 md:space-y-0 justify-between items-center'}>
                        <div className={'flex flex-col gap-4'}>
                            <h1 className={'font-san text-2xl md:text-6xl'}>Your Trusted Choice</h1>
                            <p>
                                At Still Possible Support Home, we are committed to enhancing the quality of life for
                                individuals by offering compassionate and professional care. Our team is dedicated to
                                providing the right balance of assistance and independence through our range of services
                                tailored to meet the unique needs of each client.
                            </p>
                            <p>
                                At Still Possible Support Home, we believe in providing care with compassion and
                                respect. Our mission is to improve the quality of life for those we serve, allowing them
                                to live comfortably and independently in their homes and communities. Let us help you
                                create a plan that fits your needs, so you can continue enjoying life to the fullest.
                            </p>
                            <p>
                                We understand that navigating the complexities of disability services can be
                                overwhelming.
                                That's why we are here to guide and support our clients every step of the way, providing
                                compassionate care that enhances their quality of life.
                            </p>
                        </div>
                        <div>
                            <img src={aboutMap} alt="Map of Service Areas" className="rounded-lg"/>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex justify-center md:justify-end mt-5">
                        <button onClick={() => navigate('/about')}
                                className={'btn bg-primary-secondary hover:bg-primary px-16 py-4 flex items-center'}>
                            <span>Read More</span>
                            <GoArrowRight className="ml-2"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
