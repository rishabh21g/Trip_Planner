import React, { useEffect } from 'react';
import image from '../assets/trip.webp';
import { BASE_URL, GetPlaceDetails } from './services/place';

const TripInfo = ({ trips }) => {
    const API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
    const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    const getPlaceIdsFromTextSearch = async (query) => {
        if (!query) return;

        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `${BASE_URL}?query=${encodedQuery}&key=${API_KEY}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            if (data.status === "OK") {
                const ids = data.results.map((place) => place.place_id);
                setPlaceIds(ids);
                return ids;
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
        if (trips?.userChoice?.place) {
            getPlaceIdsFromTextSearch(trips.userChoice.place);
        }
    }, [trips]);
    return (
        <div>
            <div className='items-center flex justify-center'>
                <img src={image} alt='placeholder' className='w-full max-w-[750px] h-auto object-contain shadow-md rounded-lg my-4' />
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
