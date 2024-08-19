import { useState } from 'react';
import SubHeader from "../../components/frontComponents/SubHeader.jsx";
import { GoArrowRight } from "react-icons/go";

const Refer = () => {
    const [friends, setFriends] = useState([{ name: '', email: '', phone: '', address: '' }]);
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });

    const handleAddFriend = () => {
        setFriends([...friends, { name: '', email: '', phone: '', address: '' }]);
    };

    const handleRemoveFriend = (index) => {
        const newFriends = friends.filter((_, i) => i !== index);
        setFriends(newFriends);
    };

    const handleFriendChange = (index, event) => {
        const newFriends = friends.map((friend, i) => {
            if (i === index) {
                return { ...friend, [event.target.name]: event.target.value };
            }
            return friend;
        });
        setFriends(newFriends);
    };

    const handleUserInfoChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            userInfo,
            friends
        };
        console.log(data);
        // Handle form submission logic here (e.g., sending data to an API)
    };

    return (
        <section>
            <SubHeader title="Contact" content="Reach out for any health care support" />
            <form onSubmit={handleSubmit} className={'container mx-auto p-4'}>
                <div className={'flex flex-col gap-4 bg-white rounded-xl p-5'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'text-3xl text-primary font-san font-bold'}>Refer a Friend Today.</h1>
                        <p>Refer a friend to receive 1 hour of service FREE!</p>
                    </div>

                    <fieldset className={'border p-5 rounded-xl'}>
                        <legend className={'text-primary font-san font-bold p-5'}>Your Info</legend>
                        <div className={'md:flex md:space-x-6'}>
                            <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                <label className={'font-san font-bold'} htmlFor="your-name">Your Name</label>
                                <input
                                    id="your-name"
                                    name="name"
                                    placeholder={'Enter Name'}
                                    className={'px-4 bg-gray-100 rounded-lg py-4'}
                                    type="text"
                                    value={userInfo.name}
                                    onChange={handleUserInfoChange}
                                />
                            </div>

                            <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                <label className={'font-san font-bold'} htmlFor="your-email">Your Email</label>
                                <input
                                    id="your-email"
                                    name="email"
                                    placeholder={'Enter Email'}
                                    className={'px-4 bg-gray-100 rounded-lg py-4'}
                                    type="text"
                                    value={userInfo.email}
                                    onChange={handleUserInfoChange}
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className={'border p-5 rounded-xl'}>
                        <legend className={'text-primary font-san font-bold p-5'}>Friends Info</legend>
                        {friends.map((friend, index) => (
                            <div key={index} className={'space-y-4 border-t pt-4 mt-4'}>
                                <div className={'md:flex md:space-x-6'}>
                                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                        <label className={'font-san font-bold'} htmlFor={`friend-name-${index}`}>Your Friend's Name</label>
                                        <input
                                            id={`friend-name-${index}`}
                                            name="name"
                                            placeholder={'Enter Name'}
                                            className={'px-4 bg-gray-100 rounded-lg py-4'}
                                            type="text"
                                            value={friend.name}
                                            onChange={(event) => handleFriendChange(index, event)}
                                        />
                                    </div>

                                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                        <label className={'font-san font-bold'} htmlFor={`friend-email-${index}`}>Your Friend's Email</label>
                                        <input
                                            id={`friend-email-${index}`}
                                            name="email"
                                            placeholder={'Enter Email'}
                                            className={'px-4 bg-gray-100 rounded-lg py-4'}
                                            type="text"
                                            value={friend.email}
                                            onChange={(event) => handleFriendChange(index, event)}
                                        />
                                    </div>
                                </div>

                                <div className={'md:flex md:space-x-6'}>
                                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                        <label className={'font-san font-bold'} htmlFor={`friend-phone-${index}`}>Your Friend's Phone</label>
                                        <input
                                            id={`friend-phone-${index}`}
                                            name="phone"
                                            placeholder={'Enter Phone'}
                                            className={'px-4 bg-gray-100 rounded-lg py-4'}
                                            type="text"
                                            value={friend.phone}
                                            onChange={(event) => handleFriendChange(index, event)}
                                        />
                                    </div>

                                    <div className={'flex flex-col space-y-2 py-2 w-full'}>
                                        <label className={'font-san font-bold'} htmlFor={`friend-address-${index}`}>Your Friend's Address</label>
                                        <input
                                            id={`friend-address-${index}`}
                                            name="address"
                                            placeholder={'Enter Address'}
                                            className={'px-4 bg-gray-100 rounded-lg py-4'}
                                            type="text"
                                            value={friend.address}
                                            onChange={(event) => handleFriendChange(index, event)}
                                        />
                                    </div>
                                </div>

                                {index > 0 && (
                                    <div className={'flex justify-end'}>
                                        <button
                                            type="button"
                                            className={'text-red-500 hover:text-red-700 font-bold'}
                                            onClick={() => handleRemoveFriend(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className={'pt-4'}>
                            <button
                                type="button"
                                className={'btn bg-gray-200 hover:bg-gray-300 text-primary px-4 py-2 rounded-md'}
                                onClick={handleAddFriend}
                            >
                                Add Another Friend
                            </button>
                        </div>
                    </fieldset>

                    <div className={'flex pt-3 md:pt-0'}>
                        <button
                            type="submit"
                            className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-8 py-4 text-white'}>
                            <span>Send Refer Request</span>
                            <GoArrowRight/>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Refer;
