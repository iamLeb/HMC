import { ImLocation } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import React from "react";
import {GoArrowRight} from "react-icons/go";

const Contact = () => {
    return (
        <section>
            <SubHeader title="Contact" content="Reach out for any health care support" />
            <div className={'container mx-auto p-4'}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
                    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-md">
                        <div className="bg-gray-100 p-5 rounded-full text-3xl">
                            <ImLocation/>
                        </div>
                        <span className="text-xl text-primary font-bold">Our Location</span>
                        <ul className="flex flex-col text-center">
                            <li className="text-gray-600 text-lg">Sunshine Business Park</li>
                            <li className="text-gray-600 text-lg">Sector-94, Poland</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-md">
                        <div className="bg-gray-100 p-5 rounded-full text-3xl">
                            <MdPhoneInTalk/>
                        </div>
                        <span className="text-xl text-primary font-bold">Contact Number</span>
                        <ul className="flex flex-col text-center">
                            <li className="text-gray-600 text-lg">+1 (204) 558-6856</li>
                            <li className="text-gray-600 text-lg">+1 (431) 222-5631</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-md">
                        <div className="bg-gray-100 p-5 rounded-full text-3xl">
                            <IoMdMail/>
                        </div>
                        <span className="text-xl text-primary font-bold">Our Email</span>
                        <ul className="flex flex-col text-center">
                            <li className="text-gray-600 text-lg">contact@homemychoice.ca</li>
                            <li className="text-gray-600 text-lg">info@homemychoice.ca</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-md">
                        <div className="bg-gray-100 p-5 rounded-full text-3xl">
                            <LuCalendarClock/>
                        </div>
                        <span className="text-xl text-primary font-bold">Visit Between</span>
                        <ul className="flex flex-col text-center">
                            <li className="text-gray-600 text-lg">Mon - Sun: 8:00 - 5:00</li>
                            <li className="text-gray-600 text-lg">247 Automated Service</li>
                        </ul>
                    </div>
                </div>

                <div className={'flex flex-col gap-4 bg-white rounded-xl p-5'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'text-3xl text-primary font-san font-bold'}>Send Us A Message</h1>
                        <p>Give us chance to serve and bring magic to your brand.</p>
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

                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                        <label className={'font-san font-bold'} htmlFor="name">Phone Number</label>
                        <input placeholder={'Enter Phone Number'} className={'px-4 bg-gray-100 rounded-lg py-4'}
                               type="text"/>
                    </div>

                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                        <label className={'font-san font-bold'} htmlFor="name">Message</label>
                        <textarea placeholder={'Your Message'}
                                  className={'px-4 bg-gray-100 rounded-lg py-4 resize-none'}/>
                    </div>

                    <div className={'flex pt-3 md:pt-0'}>
                        <button
                            className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-8 py-4 text-white'}>
                            <span>Send Message</span>
                            <GoArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
