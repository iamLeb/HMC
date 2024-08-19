import { FaHandsHelping } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa6";
import {NavLinks} from "./NavLinks";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={'bg-[#061d24] text-white p-4 md:p-9 border-t-4 border-primary-secondary'}>
            <div className={'container mx-auto md:flex justify-between space-y-4'}>
                <div className={'flex flex-col gap-2 md:gap-4'}>
                    <div className={'flex space-x-4 items-center text-xl my-5'}>
                        <FaHandsHelping className={'text-primary-secondary text-3xl'} />
                        <span className={'font-san'}>Need Help</span>
                    </div>
                    <ul className={'flex flex-col gap-2 md:gap-4'}>
                        <li>
                            <div className={'flex space-x-4 items-center'}>
                                <MdOutlinePhoneInTalk />
                                <span>+1 (204) 555 5555</span>
                            </div>
                        </li>
                        <li>
                            <div className={'flex space-x-4 items-center'}>
                                <IoMailOpenOutline />
                                <span>contact@homemychoice.com</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <div className={'flex space-x-4 items-center text-xl my-2'}>
                        <MdOutlineSupportAgent className={'text-primary-secondary text-3xl'}/>
                        <span className={'font-san'}>Services</span>
                    </div>
                    <ul className={'flex flex-col gap-4'}>
                        <li>
                            <div>
                                <span>Home Support</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Personal Care</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Complex Care</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <div className={'flex space-x-4 items-center text-xl my-2'}>
                        <FaHandHoldingHeart className={'text-primary-secondary text-3xl'} />
                        <span className={'font-san'}>Quick Links</span>
                    </div>
                    <ul className={'flex flex-col gap-4'}>
                        { NavLinks.map((link, i) => (
                            <li className={'cursor-pointer'} key={i} onClick={() => navigate(link.path)}>
                                <div>
                                    <span>{link.name} Pages</span>
                                </div>
                            </li>
                        ))}
                        <li className={'cursor-pointer'} onClick={() => navigate('/career')}>
                            <div>
                                <span>Career</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <h1 className={'font-san text-2xl md:text-4xl capitalize'}>Subscribe to our news letter</h1>
                    <p>A Weekly digest of latest news, articles and resources</p>
                    <div className={'flex space-x-2'}>
                        <input className={'py-3 px-3 md:px-16 rounded-lg focus:outline-none '} type="text" placeholder={'Enter your email'}/>
                        <button className={'bg-primary-secondary px-8 py-2 rounded-lg'}>Subscribe</button>
                    </div>
                    <p>By continuing, you agree to Home My Choice Terms and Conditions and Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
