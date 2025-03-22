import React, { useState, useEffect } from "react";
import image from "../assets/trip.webp"; 

const DailyPlan = ({ trips }) => {
  const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_DAILYPLAN_API_KEY;
  const [imageUrls, setImageUrls] = useState({});

  const itineraryArray = trips?.TripData?.travelPlan?.itinerary
    ? Object.values(trips.TripData.travelPlan.itinerary)
    : [];
  const fetchImage = async (placeName) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${UNSPLASH_API_KEY}&per_page=1`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        return data.results[0].urls.regular; 
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
    return null; 
  };
  useEffect(() => {
    const fetchImages = async () => {
      const newImageUrls = {};
      for (let dailyPlan of itineraryArray) {
        for (let plan of dailyPlan.plans) {
          if (!imageUrls[plan.placeName]) {
            const imgUrl = await fetchImage(plan.placeName);
            newImageUrls[plan.placeName] = imgUrl || image;
          }
        }
      }
      setImageUrls((prev) => ({ ...prev, ...newImageUrls }));
    };

    fetchImages();
  }, [trips]);

  return (
    <div className="my-1 relative bg-transparent ">
      <h1 className="font-bold text-3xl mb-5 text-gray-100">Places to Visit</h1>
      <div className="space-y-8">
        {itineraryArray.map((dailyPlan, index) => (
          <div key={index} className="bg-transparent p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] shadow-lg border border-gray-300">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Day {index + 1}</h1>
            <h2 className="text-lg text-gray-300 font-semibold">
              Theme: {dailyPlan.theme}
            </h2>

            {dailyPlan.plans.map((plan, i) => (
              <div key={i} className="flex flex-col xl:flex-row lg:flex-row md:flex-row bg-transparent p-4  shadow-md mb-4 items-start justify-items-start">
                <img
                  src={imageUrls[plan.placeName] || image} 
                  alt={plan.placeName}
                  className="w-96 h-64 object-cover"
                />
                <div className="ml-4 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold text-gray-300">
                    {plan.timeToVisit}
                  </h2>
                  <h1 className="text-xl text-gray-300 font-bold">{plan.placeName}</h1>
                  <p className="text-gray-300">{plan.details}</p>
                  <p className="text-gray-300 font-medium">
                    Travel Time: {plan.travelTime}
                  </p>
                  <p className="text-gray-300 font-semibold">
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
