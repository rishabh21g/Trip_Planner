import React, { useEffect, useState } from 'react';
import image from '../assets/trip.webp';
import { BASE_URL } from './services/data';
const TripInfo = ({ trips }) => {

    // PHOTO REFERENCE ID CALL
    const [imageURL, setImageURL] = useState()
  
    const PHOTO_URL = "https://maps.googleapis.com/maps/api/place/photo?maxWidth=1600&maxHeight=1600&photo_reference={photoID}&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
    const GetPlaceIDandPhoto = async (query) => {
        if (!query) return;

        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `${BASE_URL}?query=${encodedQuery}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            if (data.status === "OK") {
                //    console.log(data.results[0].photos[0].photo_reference)  
                const NEW_PHOTO_URL = PHOTO_URL.replace("{photoID}", data.results[0].photos[0].photo_reference)
                //GOT AND SET URL
                // console.log(NEW_PHOTO_URL)
                setImageURL(NEW_PHOTO_URL)
            } else {
                console.error("API request failed:", data.status);
                return [];
            }
        } catch (error) {
            console.error("Error during API request:", error);
            return [];
        }
    };

    useEffect(() => {
        if (trips?.TripData?.travelPlan?.location) {
            GetPlaceIDandPhoto(trips?.TripData?.travelPlan?.location);
        }
    }, [trips]);
    return (
        <div>
            <div className='items-center flex justify-center'>
                <img src={imageURL||image} alt='placeholder' className='w-full max-w-[750px] h-auto object-cover shadow-md rounded-lg my-4 scale-105' />
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
