import React, { useState, useEffect } from "react";
import image from "../assets/trip.webp"; 

const DailyPlan = ({ trips }) => {
  const [image_url, setImage_url] = useState()
  const itineraryArray = trips?.TripData?.travelPlan?.itinerary
    ? Object.values(trips.TripData.travelPlan.itinerary)
    : [];

  return (
    <div className="my-1">
      <h1 className="font-bold text-3xl mb-5">Places to Visit</h1>
      <div className="space-y-8">
        {itineraryArray.map((dailyPlan, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Day {index + 1}</h1>
            <h2 className="text-lg text-gray-600 font-semibold">
              Theme: {dailyPlan.theme}
            </h2>

            {dailyPlan.plans.map((plan, i) => (
              <div key={i} className="flex flex-col xl:flex-row lg:flex-row md:flex-row bg-white p-4 rounded-lg shadow-md mb-4">
                <img
                  src={image_url|| image} 
                  alt={plan.placeName}
                  className="w-96 h-auto object-cover rounded-md"
                />
                <div className="ml-4 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {plan.timeToVisit}
                  </h2>
                  <h1 className="text-xl font-bold">{plan.placeName}</h1>
                  <p className="text-gray-500">{plan.details}</p>
                  <p className="text-blue-600 font-medium">
                    Travel Time: {plan.travelTime}
                  </p>
                  <p className="text-green-600 font-semibold">
                    Ticket: {plan.ticketPricing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyPlan;
