import aboutMap from "../../assets/images/about-map-img.png";
import { GoArrowRight } from "react-icons/go";

const About = () => {
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
                                For over 26 years, we have been a reliable service provider, offering personalized care and support to our community. Our mission is to empower individuals to live independently, providing them with the resources they need to thrive.
                            </p>
                            <p>
                                We are dedicated to delivering compassionate, professional care, whether it's assisting with daily tasks, offering emotional support, or providing specialized services. Our team is here to make a positive impact on the lives of those we serve.
                            </p>
                        </div>
                        <div>
                            <img src={aboutMap} alt="Map of Service Areas" className="rounded-lg"/>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex justify-center md:justify-end mt-5">
                        <button className={'btn bg-primary-secondary hover:bg-primary px-16 py-4 flex items-center'}>
                            <span>Read More</span>
                            <GoArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
