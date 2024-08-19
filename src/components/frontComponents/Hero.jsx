import { GoArrowRight } from "react-icons/go";
import { BiDonateHeart } from "react-icons/bi";
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className={'h-screen bg-[#f7f5ec] p-5'}>
            <div className={'container mx-auto md:flex justify-between h-full items-center relative'}>
                <div className={'flex flex-col gap-4 mt-9 md:mt-0 relative z-10'}>
                    <h1 className={'font-san text-2xl md:text-6xl font-bold text-primary w-full relative'}>
                        <span className="relative z-20">Empowering Lives, One Step at a Time</span>
                        <span className={'absolute top-0 -left-2 md:-left-5 w-14 h-14 md:w-32 md:h-32 bg-primary-secondary rounded-full z-0'}></span>
                    </h1>
                    <p className={'font-light text-gray-600'}>
                        Compassionate support for elders, individuals with disabilities, and anyone facing health challenges. We’re here to help you live life to the fullest.
                    </p>
                    <div className={'md:flex md:space-x-4 space-y-2 md:space-y-0'}>
                        <button className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-10 py-4 text-white'}>
                            <span>Get Started</span>
                            <GoArrowRight />
                        </button>
                        <button onClick={() => navigate('/services')} className={'btn bg-primary-secondary hover:bg-primary text-xl px-5 md:px-10 py-3 text-white'}>
                            <BiDonateHeart />
                            <span>View Services</span>
                        </button>
                    </div>
                </div>
                <div className={'flex'}>
                    <img className={'w-[100em]'} src="https://html.xpressbuddy.com/sunnyaid/assets/img/hero/hero-img01.png" alt="photo"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
