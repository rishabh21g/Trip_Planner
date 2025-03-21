import React, { useEffect, useState } from 'react';
import image from '../assets/trip.webp';
import { toast } from 'sonner';
import { FaLocationDot } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
const TripInfo = ({ trips }) => {
    const [imageURL, setImageURL] = useState()
    const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
    const fetchImages = async (query) => {

        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_API_KEY}&per_page=2&orientation=landscape`);
            const data = await response.json();
            setImageURL(data.results[0].urls.full)


        } catch (error) {
            console.error("Error fetching images:", error);
            toast("Location photo not available")
            return [];
        }
    };
    
    useEffect(() => {
        if (trips?.userChoice?.place) {
            // console.log("Running")
            fetchImages(trips.userChoice.place);
        }
    }, [trips]);
    
    
    return (
        <div className='relative'>
            <div className='items-center flex justify-center '>
                <img src={imageURL || image} alt='placeholder' className='w-full max-w-[750px] h-auto object-cover shadow-md rounded-none my-4' />
            </div>
            <div className='mt-6 gap-4'>
                <h2 className='md:text-5xl text-3xl font-bold flex justify-start items-center text-gray-200 mb-4'>{trips?.userChoice?.place}<MdLocationOn className='size-8 text-gray-200 '/></h2>
                <div className='flex gap-5 my-3 text-gray-200'>
                    <p className='rounded-none text-xs bg-blue-500 py-4 px-4 hover:bg-blue-600 cursor-pointer'>Budget: {trips?.userChoice?.budget}</p>
                    <p className='rounded-none text-xs bg-blue-500 py-4 px-4  hover:bg-blue-600 cursor-pointer'>No. of Days: {trips?.userChoice?.noOfDays}</p>
                    <p className='rounded-none text-xs bg-blue-500 py-4 px-4  hover:bg-blue-600 cursor-pointer'>{trips?.userChoice?.travelerType}</p>
                </div>
            </div>
        </div>
    );
};

export default TripInfo;
