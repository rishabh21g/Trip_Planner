import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'
import image from "../assets/trip.webp";

const HotelCard = ({ hotel }, { index }) => {
   

   
    return (

        <Link key={index} to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.hotelAddress}`} target='_blank'>
            <div className="rounded-lg shadow-md hover:scale-105 w-80 h-80 p-5 gap-2 bg-gray-200 items-center flex flex-col" >
                <img src={image} alt="Hotel" className="rounded-md w-64 h-auto object-contain" />
                <div>
                <h2 className="font-semibold mt-2">{hotel?.hotelName}</h2>
                <p className="text-xs text-gray-600">Location: {hotel?.hotelAddress}</p>
                <h2 className="text-xs text-gray-600">Price: {hotel?.price}</h2>
                <h2 className="text-xs text-gray-600">Rating: {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard