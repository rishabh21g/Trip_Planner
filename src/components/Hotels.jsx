import React from 'react';
import image from "../assets/trip.webp";
import { Link } from 'react-router';

const Hotels = ({ trips }) => {
  return (
    <div className="my-2 w-full">
      <h1 className="font-bold text-3xl">Hotels Recommendations</h1>
      <div className=" flex flex-wrap gap-10 mt-5 w-full">
        {trips?.TripData?.hotelOptions.map((hotel, index) => {
          return (
           <Link key={index} to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.hotelAddress}`} target='_blank'>
             <div className="rounded-lg shadow-md hover:scale-105 w-[350px] h-auto p-5 gap-5 bg-gray-200" >
              <img src={image} alt="Hotel" className="rounded-md w-full" />
              <h2 className="font-semibold mt-2">{hotel?.hotelName}</h2>
              <p className="text-xs text-gray-600">Location: {hotel?.hotelAddress}</p>
              <h2 className="text-xs text-gray-600">Price: {hotel?.price}</h2>
              <h2 className="text-xs text-gray-600">Rating: {hotel?.rating}</h2>
            </div>
           </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
