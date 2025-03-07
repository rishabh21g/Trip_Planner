import React, { useEffect, useState } from 'react';
import image from '../assets/trip.webp';
import { toast } from 'sonner';
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
            console.log("Running")
            fetchImages(trips.userChoice.place);
        }
    }, [trips]);
    
    
    return (
        <div>
            <div className='items-center flex justify-center'>
                <img src={imageURL || image} alt='placeholder' className='w-full max-w-[750px] h-auto object-cover shadow-md rounded-lg my-4 scale-105' />
            </div>
            <div className='mt-6 gap-4'>
                <h2 className='text-3xl font-bold'> Location📍: {trips?.userChoice?.place}</h2>
                <div className='flex gap-5 my-3'>
                    <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>Budget: {trips?.userChoice?.budget}</p>
                    <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>No. of Days: {trips?.userChoice?.noOfDays}</p>
                    <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>{trips?.userChoice?.travelerType}</p>
                </div>
            </div>
        </div>
    );
};

export default TripInfo;
