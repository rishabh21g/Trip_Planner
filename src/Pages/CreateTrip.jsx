import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PROMPT, SelectBudgetOptions, SelectTravelerOptions } from "../components/services/data";



const CreateTrip = () => {
  const [place, setPlace] = useState(null);
  const [data, setData] = useState({});
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

  const handleChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const GenerateTrip = async () => {
    if (!data?.budget || !data?.travelerType || !data?.noOfDays || !data?.place) return toast("Please fill up all the details")
    const FINAL_PROMPT = PROMPT
      .replace("{location}", data?.place)
      .replace("{total days}", data?.noOfDays)
      .replace("{travelers}", data?.travelerType)
      .replace("{budget}", data?.budget)
      .replace("{total days}", data?.noOfDays)
    console.log(FINAL_PROMPT)
  };

  useEffect(() => {
    console.log("User Input Data:", data);
  }, [data]);

  return (
    <div className="flex flex-col mx-auto max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12">
      <h2 className="font-bold text-3xl">Share your travel preferences with us</h2>
      <p className="text-lg text-gray-600">
        Trip-X will craft a personalized itinerary just for you. Sit back and let our AI-powered planner design your perfect trip effortlessly!
      </p>

      {/* Destination Selection */}
      <div className="mt-10">
        <h2 className="text-lg text-gray-600 my-3">Where do you want to visit?</h2>
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_API_KEY}
          selectProps={{
            value: place,
            onChange: (place) => {
              setPlace(place);
              handleChange("place", place?.label);
            },
          }}
        />
      </div>

      {/* Number of Days */}
      <div className="mt-5">
        <h2 className="text-lg text-gray-600 my-3">How many days are you looking for to travel?</h2>
        <Input
          type="number"
          placeholder="e.g., 4"
          min={1}
          max={20}
          onChange={(e) => handleChange("noOfDays", e.target?.value)}
        />
      </div>

      {/* Budget Selection */}
      <div className="mt-10">
        <h2 className="text-gray-600 my-3 text-2xl">What is your budget range for this trip?</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
          {SelectBudgetOptions?.map((budget, index) => (
            <div
              key={index}
              className={`border py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg ${data?.budget === budget?.title ? "border-black shadow-lg" : ""
                }`}
              onClick={() => handleChange("budget", budget?.title)}
            >
              <h2 className="text-2xl">{budget?.icon}</h2>
              <h2 className="text-xl font-bold">{budget?.title}</h2>
              <h2 className="text-sm text-gray-600 mt-2">{budget?.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Traveler Type Selection */}
      <div className="mt-5">
        <h2 className="text-gray-600 my-3 text-2xl mt-12">Who are you traveling with?</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
          {SelectTravelerOptions?.map((traveler, index) => (
            <div
              key={index}
              className={`border py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg ${data?.travelerType === traveler?.title ? "border-black shadow-lg" : ""
                }`}
              onClick={() => handleChange("travelerType", traveler?.title)}
            >
              <h2 className="text-2xl">{traveler?.icon}</h2>
              <h2 className="text-xl font-bold">{traveler?.title}</h2>
              <h2 className="text-sm text-gray-600 mt-2">{traveler?.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center my-10">
        <Button onClick={GenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
