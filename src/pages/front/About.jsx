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
                        At Still Possible Support Home, we are committed to enhancing the quality of life for individuals by offering compassionate and professional care. Our team is dedicated to providing the right balance of assistance and independence through our range of services tailored to meet the unique needs of each client.
                    </p>
                    <p>
                        At Still Possible Support Home, we believe in providing care with compassion and respect. Our mission is to improve the quality of life for those we serve, allowing them to live comfortably and independently in their homes and communities. Let us help you create a plan that fits your needs, so you can continue enjoying life to the fullest.
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
