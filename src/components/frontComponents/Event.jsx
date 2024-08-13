import {GoArrowRight} from "react-icons/go";

const events = [
    {
        image: 'https://images.pexels.com/photos/6980226/pexels-photo-6980226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Event 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque, fuga incidunt inventore minus modi nam nisi numquam odio qui rerum sapiente soluta ut vel voluptate voluptatibus. Aspernatur, optio!'
    }, {
        image: 'https://images.pexels.com/photos/6980170/pexels-photo-6980170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Event 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque, fuga incidunt inventore minus modi nam nisi numquam odio qui rerum sapiente soluta ut vel voluptate voluptatibus. Aspernatur, optio!'
    }, {
        image: 'https://images.pexels.com/photos/6984619/pexels-photo-6984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Event 3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque, fuga incidunt inventore minus modi nam nisi numquam odio qui rerum sapiente soluta ut vel voluptate voluptatibus. Aspernatur, optio!'
    }
];
const Event = () => {
    return (
        <section className={'bg-white'}>
            <div className={'container mx-auto'}>
                {/* Header Section */}
                <div className={'flex flex-col gap-4 md:gap-6 justify-center items-center text-center md:text-start py-9'}>
                    <span className="bg-[#f7f5ec] px-5 rounded-full text-primary uppercase font-semibold text-sm">Featured Event</span>
                    <h1 className={'text-2xl md:text-6xl font-san text-primary'}>Join Our Upcoming Event</h1>
                </div>

                {/* Event Content */}
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'}>
                    { events.map((event, index) => (
                        <div key={index} className={'bg-white shadow-md flex flex-col'}>
                            <div className={'overflow-hidden rounded-t-lg h-56'}>
                                <img
                                    className={'object-cover object-center w-full h-full'}
                                    src={event.image}
                                    alt="Event 1"/>
                            </div>
                            <div className={'p-5 flex flex-col gap-2 flex-grow'}>
                                <h1 className={'text-2xl text-primary'}>{event.title}</h1>
                                <p>{event.body}</p>
                                <div className={'mt-auto'}>
                                    <button
                                        className={'flex items-center justify-center text-lg px-5 md:px-10 py-3 text-gray-800'}>
                                        <span>Read More</span>
                                        <GoArrowRight className={'ml-2'}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Event;
