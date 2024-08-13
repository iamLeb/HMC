const Connection = () => {
    return (
        <section className={'bg-white py-5'}>
            <div className={'container mx-auto'}>
                {/* Header Section */}
                <div
                    className={'flex flex-col gap-4 md:gap-6 justify-center items-center text-center md:text-start py-9'}>
                    <h1 className={'text-2xl md:text-6xl font-san text-primary'}>Comfort. Security. Connection.</h1>
                    <p className={'w-full md:w-2/3 text-center md:text-start'}>
                        As we age, these essentials become more important, and that's where Home My Choice steps in. Our
                        dedicated, trained Care Givers offer the guidance and support you deserve, ensuring your comfort
                        and well-being.
                    </p>
                </div>

                {/* Content Section */}
                <div className={'md:flex justify-between items-center md:space-x-4 p-2'}>
                    {/* Left Column */}
                    <div className={'flex flex-col gap-4 w-full md:w-1/2'}>
                        {/* Today Section */}
                        <div
                            className={'flex flex-col justify-center bg-primary-secondary w-full rounded-3xl p-9 h-full'}>
                            <h1 className={'font-san text-primary text-xl md:text-4xl'}>We've got you covered for
                                today</h1>
                            <ul className={'list-disc list-inside'}>
                                <li>Medication reminders</li>
                                <li>Transitioning home from the hospital</li>
                                <li>Transportation to and from doctors</li>
                                <li>Healthy diet and nutrition guidance</li>
                            </ul>
                        </div>
                        {/* Tomorrow Section */}
                        <div
                            className={'flex flex-col justify-center bg-primary text-white w-full rounded-3xl p-9 h-full'}>
                            <h1 className={'font-san text-xl md:text-4xl'}>And we've got you covered for tomorrow</h1>
                            <p className={'text-sm'}>
                                With ongoing assessments and care professionals in your home, we adapt our services to
                                your evolving needs. We collaborate with other care providers to ensure holistic and
                                comprehensive care.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={'w-full md:w-1/2 mt-5 md:mt-0'}>
                        <img className={'rounded-lg'}
                             src="https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                             alt="elderly receiving care"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connection;
