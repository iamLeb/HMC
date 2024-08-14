import React from "react";
import SubHeader from "../../components/frontComponents/SubHeader.jsx";

const About = () => {
    return (
        <section>
            <SubHeader title="About" content="We are a compassionate and dedicated team committed to supporting those with special needs to
                        live fulfilling, independent lives." />

            {/* About Content */}
            <div className="container mx-auto md:flex justify-between items-center space-x-0 md:space-x-6 p-2 md:p-0">
                <div className="hidden md:block overflow-hidden w-full h-[500px] py-5">
                    <img className="object-cover object-center w-full h-full rounded-lg" src="//images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=800" alt="photo" />
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
                    <div className={'flex'}>
                        <button className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-8 py-4 text-white'}> Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
